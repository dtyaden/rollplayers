import { Component, OnInit, Input } from '@angular/core';
import {FeedService} from '../feed-service.service';
import { FeedCollection } from '../model/FeedCollection';
import { MatDingoPlayerComponent } from '../mat-dingo-player/mat-dingo-player.component';

@Component({
  selector: 'listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  title = 'rollplayers';
  
  feedUrl: string = 'https://pinecast.com/jsonfeed/roll-players';
  @Input() dingoPlayer: MatDingoPlayerComponent;

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
