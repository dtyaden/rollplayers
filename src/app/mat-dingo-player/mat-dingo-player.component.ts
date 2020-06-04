import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../model/feed';
import { ViewChild, ElementRef } from '@angular/core';
import { DingoPlayerService } from '../services/dingo';

@Component({
  selector: 'app-mat-dingo-player',
  templateUrl: './mat-dingo-player.component.html',
  styleUrls: ['./mat-dingo-player.component.css']
})
export class MatDingoPlayerComponent {

  @Input() feed: Feed;

  constructor(
    private dingoPlayerService: DingoPlayerService
  ) { }

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  onChange(event: any, player: any) {
    this.dingoPlayerService.volumeValue = event.value
    player.player.nativeElement.volume = this.dingoPlayerService.volumeValue / 100;
  }

  public setFeed(feed: Feed) {
    this.feed = feed;
    console.log("feed set in dingo-player")
  }
}
