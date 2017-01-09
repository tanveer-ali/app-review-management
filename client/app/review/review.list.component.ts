import { Component, OnInit, OnChanges } from '@angular/core'
import { Location } from '@angular/common';
import {Router} from  '@angular/router'

import { ReviewService } from './review.service'
import { ReviewModel } from './reviewModel'

@Component({
    moduleId: module.id,
    templateUrl: `review.list.component.html`,
    styleUrls:['review.list.component.css']
})
export class ReviewsListComponent implements OnInit, OnChanges {

    message: string;
    reviews: ReviewModel[];

    paging: number[] = [];
    currentPage: number = 1;
    sortByField="Latest";

    private _reviewService:ReviewService;
    private _router:Router;
    
    constructor(reviewService: ReviewService, private router: Router) { 
        this._reviewService = reviewService;
        this._router = router;
    }

    ngOnInit() {
        this.getReviews();
    }

    ngOnChanges() {
        this.getReviews();
    }

    getReviews() {
        this._reviewService.getAllReviews()
            .subscribe(
                reviews => this.reviews = reviews,
                error => this.message = <any>error,
                () => this.loadReviewList());
    }

    loadReviewList(): void {
        for (let i = 1; i <= Math.ceil(this.reviews.length / 5); i++) {
            this.paging.push(i);
        }
    }

    changePage(pageNo: number): void {
        this.currentPage = pageNo;
    }


    onSortChange(){
        this.currentPage=1;
    }

}