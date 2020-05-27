import { Component, OnInit } from '@angular/core';
import {FeedService} from '../feed-service.service';
import { FeedCollection } from '../model/FeedCollection';

@Component({
  selector: 'listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  title = 'rollplayers';
  
  feedUrl: string = 'https://pinecast.com/jsonfeed/roll-players';
  
  public feeds: FeedCollection

  constructor(
    public feedService: FeedService
  ){
    this.feeds = new FeedCollection([])
  }

  ngOnInit(){
    this.refreshFeed();
  }

  private setFeeds(feedCollection:FeedCollection){
    this.feeds = feedCollection;
  }

  private refreshFeed(){
    this.feedService.getFeedContent(this.feedUrl)
    .subscribe(
      feedCollection=> {
        this.setFeeds(feedCollection)
      },
      error => console.log(error)
    );
  }

}
