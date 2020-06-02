import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../model/feed';
import { MatDingoPlayerComponent } from '../mat-dingo-player/mat-dingo-player.component';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: Feed;

  @Input() dingoPlayer: MatDingoPlayerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  play(feed:Feed){
    console.log(feed);
    console.log("dingoPlayer:")
    console.log(typeof this.dingoPlayer)
    this.dingoPlayer.setFeed(feed);
  }

}
