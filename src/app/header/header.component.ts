import { Component, OnInit, Input } from '@angular/core';
import { MatDingoPlayerComponent } from '../mat-dingo-player/mat-dingo-player.component';
import {faSpotify, faGooglePlay, faGoogle, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() dingoPlayer: MatDingoPlayerComponent;
  faSpotify=faSpotify;
  faGooglePlay=faGooglePlay;
  faGoogle=faGoogle;
  faTwitter=faTwitter;
  faFacebook=faFacebook;
  position = new FormControl('below');
  ngOnInit(): void {
  }
  
}
