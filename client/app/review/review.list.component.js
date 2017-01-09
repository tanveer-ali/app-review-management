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
var router_1 = require('@angular/router');
var review_service_1 = require('./review.service');
var ReviewsListComponent = (function () {
    function ReviewsListComponent(reviewService, router) {
        this.router = router;
        this.paging = [];
        this.currentPage = 1;
        this.sortByField = "New";
        this._reviewService = reviewService;
        this._router = router;
    }
    ReviewsListComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewsListComponent.prototype.ngOnChanges = function () {
        this.getReviews();
    };
    ReviewsListComponent.prototype.getReviews = function () {
        var _this = this;
        this._reviewService.getAllReviews()
            .subscribe(function (reviews) { return _this.reviews = reviews; }, function (error) { return _this.message = error; }, function () { return _this.loadReviewList(); });
    };
    ReviewsListComponent.prototype.loadReviewList = function () {
        for (var i = 1; i <= Math.ceil(this.reviews.length / 5); i++) {
            this.paging.push(i);
        }
    };
    ReviewsListComponent.prototype.changePage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ReviewsListComponent.prototype.onSortChange = function () {
        this.currentPage = 1;
    };
    ReviewsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "review.list.component.html",
            styleUrls: ['review.list.component.css']
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.Router])
    ], ReviewsListComponent);
    return ReviewsListComponent;
}());
exports.ReviewsListComponent = ReviewsListComponent;
//# sourceMappingURL=review.list.component.js.map