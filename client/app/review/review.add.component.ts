import { Component, OnInit, OnChanges } from '@angular/core'
import { ReviewService } from './review.service'
import { ReviewModel } from './reviewModel'
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: `review.add.component.html`
})
export class ReviewAddComponent {

    reviews: ReviewModel[] = [];
    newReview: ReviewModel = new ReviewModel();
    message: string;
    returnReview: ReviewModel = new ReviewModel();

    constructor(private _reviewService: ReviewService, private  _router: Router) { 

    }

    private addReviewInDB(review: ReviewModel) {
        if (!review.name)
            return;
        if (!review.review)
            return;

        this._reviewService.addReview(review)
            .subscribe(
            c => this.returnReview = c,
            function (err) { console.log('Error: %s', err); },
            this.onCompletion);         
        
    }

    private onCompletion(): void {

       alert("Review Added!");
       this.newReview = new ReviewModel();       
       //this._router.navigate(['/home']);
    }


    public addNewReview(): void {
        this.message = '';
        if (!this.newReview.name || this.newReview.name.length < 1) {
            this.message = 'Name could be empty';
        }
        else if (!this.newReview.review || this.newReview.review.length < 1) {
            this.message = 'Please enter comment before adding review';
        }
        else {
            this.addReviewInDB(this.newReview);
        }
    }

}