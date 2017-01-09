// Promise Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ReviewModel }           from './reviewModel';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ReviewService {

 
  private review_List_Url = 'http://localhost:3000/api/reviews'
  private review_ADD_Url = 'http://localhost:3000/api/review'
 

  constructor (private http: Http) {}
  
  getAllReviews (): Observable<ReviewModel[]> {
      return this.http.get(this.review_List_Url)
                      .map(this.readResponse)
                      .catch(this.onError);
  }

 addReview (review:ReviewModel): Observable<ReviewModel>  { 
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers});
 
    return this.http.post(this.review_ADD_Url, JSON.stringify(review), options)
                    .map(this.readAddResponse)
                    .catch(this.onError);
 }
 
  private readResponse(response:any) {
    let body = response.json();
    return body || { };
  }

  private readAddResponse(response:any) {
    let body = response.json();
    var review:ReviewModel = new ReviewModel();
    review._id = body._id;
    review.name = body.name;
    review.review = body.review;
    return review || { };
  }

 private onError(error:any){
        return Observable.throw(error.json().error || 'Server Error');
    }
}

