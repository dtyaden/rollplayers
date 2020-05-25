import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../model/feed';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: Feed;

  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'Link to audio URL';   
     
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;  

  constructor() { }

  ngOnInit(): void {
  }

}
