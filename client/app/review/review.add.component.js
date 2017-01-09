"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var review_service_1 = require('./review.service');
var reviewModel_1 = require('./reviewModel');
var router_1 = require('@angular/router');
var ReviewAddComponent = (function () {
    function ReviewAddComponent(_reviewService, _router) {
        this._reviewService = _reviewService;
        this._router = _router;
        this.reviews = [];
        this.newReview = new reviewModel_1.ReviewModel();
        this.returnReview = new reviewModel_1.ReviewModel();
    }
    ReviewAddComponent.prototype.addReviewInDB = function (review) {
        var _this = this;
        if (!review.name)
            return;
        if (!review.review)
            return;
        this._reviewService.addReview(review)
            .subscribe(function (c) {
            alert("Review Added!");
            _this._router.navigate(['/']);
        }, function (error) { return console.log('Error: %s', error); });
    };
    ReviewAddComponent.prototype.addNewReview = function () {
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
    };
    ReviewAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "review.add.component.html"
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.Router])
    ], ReviewAddComponent);
    return ReviewAddComponent;
}());
exports.ReviewAddComponent = ReviewAddComponent;
//# sourceMappingURL=review.add.component.js.map