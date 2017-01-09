var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tanveeer:!Password1@ds157298.mlab.com:57298/reviewsystem', ['reviews', 'counters']);

//Get all reviews
router.get('/reviews', function (req, res, next) {
    db.reviews.find(function (err, allReviews) {
        if (err) {
            res.send(err)
        }
        res.json(allReviews);
    });
});

function saveReview(review, res) {
    //get the next seq number first
    db.counters.findAndModify(
        {
            query: { _id: "reviewid" },
            update: { $inc: { seq: 1 } },
            new: true
        },function(error, result){
            if(error){
                console.log(error);
                return;
            }            
            //assign the result.seq to review and save
            review._id = result.seq;

            db.reviews.save(review, function (err, result) {
                if (err) {
                    res.send(err)
                }
                res.json(result);
            });
        }
    );

    
}

//Save review
router.post('/review', function (req, res, next) {
    var review = req.body;
    console.log(review);
    if (!review.name || !(review.review)) {
        res.status(400);
        res.json({ "error": "Bad Data" });
    } else {
        
        saveReview(review, res);        
    }
});

//initialize counter collection once to save for reviewid
db.counters.count({ _id: "reviewid" }, function (error, numOfDocs) {
    if (error) return console.log(error);

    if (numOfDocs === 0) {
        db.counters.insert(
            {
                _id: "reviewid",
                seq: 0
            }
        );
    }
});

module.exports = router;