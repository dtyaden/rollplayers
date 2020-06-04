import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Feed} from './model/feed';
import {map} from 'rxjs/operators';
import { FeedCollection } from './model/FeedCollection';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
    ) {}

   getFeedContent(url: string): Observable<FeedCollection> {
    return this.http.get<any>(url)
    .pipe(map(res => new FeedCollection(res)))
   }

   getFeedItem(feed: FeedCollection): FeedCollection{
     return feed;
   }

   private handleError (error: any) {
    // todo: log somewhere other than the console
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
