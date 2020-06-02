import { Component, OnInit, Input } from '@angular/core';
import { MatDingoPlayerComponent } from '../mat-dingo-player/mat-dingo-player.component';

@Component({
  selector: 'app-base-content',
  templateUrl: './base-content.component.html',
  styleUrls: ['./base-content.component.css']
})
export class BaseContentComponent implements OnInit {

  constructor() { }
  @Input() dingoPlayer: MatDingoPlayerComponent;
  ngOnInit(): void {
  }

  injectDingoPlayer(component, dingoPlayer: MatDingoPlayerComponent){
    component.dingoPlayer=dingoPlayer
  }
}
