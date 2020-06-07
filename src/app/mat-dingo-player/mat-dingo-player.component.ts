import { Component, OnInit, Input } from '@angular/core';
import { FeedTrack } from '../model/feed';
import { ViewChild, ElementRef } from '@angular/core';
import { DingoPlayerService } from '../services/dingo';
import { isUndefined } from 'util';
import { Track } from 'ngx-audio-player';
import { FeedCollection } from '../model/FeedCollection';
import { MatIcon } from '@angular/material/icon';
import { DingoAudioPlayerComponent } from '../dingo-audio-player/dingo-audio-player.component';

@Component({
  selector: 'app-mat-dingo-player',
  templateUrl: './mat-dingo-player.component.html',
  styleUrls: ['./mat-dingo-player.component.css']
})
export class MatDingoPlayerComponent {

  @Input() feed: FeedTrack;
  @ViewChild("player") player: DingoAudioPlayerComponent;

  private enabled: string = "volume_up";
  private disabled: string = "volume_off";
  private volumeEnabled: boolean = true;

  private volumeIcons: Map<boolean, string> = new Map([
    [true, this.enabled],
    [false, this.disabled]
  ])

  public volumeIcon: string;
  public tracks: Track[] = [{"link":"", "title":"title"}];
  public feedCollection: FeedCollection;

  constructor(
    public dingoPlayerService: DingoPlayerService
  ) {
    this.volumeIcon = this.enabled;
   }

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  public volumeSliderChange(value: number) {
    this.dingoPlayerService.volumeValue = value
    if (!this.volumeEnabled){
      this.toggleMute();
    }
    this.player.setPlayerVolume(value)
  }

  public setFeedCollection(feedCollection: FeedCollection){
    this.tracks = feedCollection.feeds;
    this.feedCollection = feedCollection;
  }

  public play(feed: FeedTrack) {
    this.player.play(feed);
  }

  public toggleMute(){
    this.volumeEnabled = !this.volumeEnabled;
    if (this.volumeEnabled) {
      this.player.setPlayerVolume(this.dingoPlayerService.volumeValue)
    }
    else{
      this.player.setPlayerVolume(0)
    }
    this.setVolumeIcon(this.volumeEnabled)
  }

  private setVolumeIcon(volumeEnabled: boolean){
    this.volumeIcon = this.volumeIcons.get(volumeEnabled);
  }
}
