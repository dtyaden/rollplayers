import { Component, OnInit, Input, ViewChild, ContentChild } from '@angular/core';
import { Track, MatAdvancedAudioPlayerComponent } from 'ngx-audio-player';
import { DingoPlayerService } from '../services/dingo';
import { FeedTrack } from '../model/feed';
import { MatSlider } from '@angular/material/slider';
import { By, element } from 'protractor';

@Component({
  selector: 'app-dingo-audio-player',
  templateUrl: './dingo-audio-player.component.html',
  styleUrls: ['./dingo-audio-player.component.css']
})
export class DingoAudioPlayerComponent implements OnInit {

  @Input() tracks: Track[];
  @ViewChild("player") player: MatAdvancedAudioPlayerComponent;
  @ContentChild("mat-slider") slider;

  constructor(public dingoPlayerService: DingoPlayerService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.setInitialVolume();
    this.fixSliderDisappearing();
  }

  //THIS IS NOT GOOD!
  fixSliderDisappearing(){
    // this bullshit doesn't support a fucking for each loop.
    let elements = document.getElementsByTagName("mat-slider")
    for (let i = 0; i < elements.length; i++){
      elements[i].classList.remove("d-none")
    }
    let spanElements = document.getElementsByClassName("d-none d-sm-block py-3 px-1")
    spanElements[0].classList.remove("d-none")
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
