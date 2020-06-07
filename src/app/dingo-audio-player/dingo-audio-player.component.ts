import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Track, MatAdvancedAudioPlayerComponent } from 'ngx-audio-player';
import { DingoPlayerService } from '../services/dingo';
import { FeedTrack } from '../model/feed';

@Component({
  selector: 'app-dingo-audio-player',
  templateUrl: './dingo-audio-player.component.html',
  styleUrls: ['./dingo-audio-player.component.css']
})
export class DingoAudioPlayerComponent implements OnInit {

  @Input() tracks: Track[];
  @ViewChild("player") player: MatAdvancedAudioPlayerComponent;

  constructor(public dingoPlayerService: DingoPlayerService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.setInitialVolume();
  }

  private setInitialVolume(){
    if(this.getBasePlayer() != undefined){
      this.setPlayerVolume(this.dingoPlayerService.volumeValue);
    }
   }

   public play(feed: FeedTrack) {
    this.player.selectTrack(feed.index)
  }

  public getBasePlayer(): any{
    return this.player?.player?.nativeElement;
  }

  public setPlayerVolume(value: number){
    this.getBasePlayer().volume = value/100
  }

}
