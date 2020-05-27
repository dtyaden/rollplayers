import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../model/feed';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mat-dingo-player',
  templateUrl: './mat-dingo-player.component.html',
  styleUrls: ['./mat-dingo-player.component.css']
})
export class MatDingoPlayerComponent implements OnInit {

  @Input() feed: Feed;

  constructor() { }

  volumeValue: number;

  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;

  ngOnInit(): void {
  }
  
  onChange(event: any, player: any){
    this.volumeValue = event.value
    player.player.nativeElement.volume = this.volumeValue/100;
  }

}
