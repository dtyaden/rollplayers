import { Component, OnInit, Input } from '@angular/core';
import { FeedTrack } from '../model/feed';
import { MatDingoPlayerComponent } from '../mat-dingo-player/mat-dingo-player.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: FeedTrack;

  @Input() dingoPlayer: MatDingoPlayerComponent;

  constructor(public router:Router) { }

  ngOnInit(): void {}

  play(feed:FeedTrack){
    this.dingoPlayer.play(feed);
  }

}
