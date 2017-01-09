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
// Promise Version
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var reviewModel_1 = require('./reviewModel');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.review_List_Url = 'http://localhost:3000/api/reviews';
        this.review_ADD_Url = 'http://localhost:3000/api/review';
    }
    ReviewService.prototype.getAllReviews = function () {
        return this.http.get(this.review_List_Url)
            .map(this.readResponse)
            .catch(this.onError);
    };
    ReviewService.prototype.addReview = function (review) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.review_ADD_Url, JSON.stringify(review), options)
            .map(this.readAddResponse)
            .catch(this.onError);
    };
    ReviewService.prototype.readResponse = function (response) {
        var body = response.json();
        return body || {};
    };
    ReviewService.prototype.readAddResponse = function (response) {
        var body = response.json();
        var review = new reviewModel_1.ReviewModel();
        review._id = body._id;
        review.name = body.name;
        review.review = body.review;
        return review || {};
    };
    ReviewService.prototype.onError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    ReviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map