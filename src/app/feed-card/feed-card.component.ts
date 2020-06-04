import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../model/feed';
import { MatDingoPlayerComponent } from '../mat-dingo-player/mat-dingo-player.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: Feed;

  @Input() dingoPlayer: MatDingoPlayerComponent;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  play(feed:Feed){
    this.dingoPlayer.setFeed(feed);
  }

}
