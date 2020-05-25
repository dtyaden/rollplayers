import { Component, OnInit } from '@angular/core';
import {FeedService} from './feed-service.service';
import {Feed} from './model/feed'
import { FeedCollection } from './model/FeedCollection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'rollplayers';
  
  feedUrl: string = 'https://pinecast.com/jsonfeed/roll-players';
  feeds: FeedCollection;

  constructor(
    public feedService: FeedService
  ){}

  ngOnInit(){
    this.refreshFeed();
  }

  private setFeeds(jsonFeed:any){
    this.feeds = jsonFeed;
    this.feeds.feeds = jsonFeed.items
    console.log("setting feed collection")
    console.log(jsonFeed);
  }

  private refreshFeed(){
    console.log("refreshing feed...")
    this.feedService.getFeedContent(this.feedUrl)
    .subscribe(
      feed=> {
        this.setFeeds(feed)
      },
      error => console.log(error)
    );
  }
}
