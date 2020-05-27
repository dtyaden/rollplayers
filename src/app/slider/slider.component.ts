import { Component, OnInit } from '@angular/core';
import {MDCSlider} from '@material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public slider: any;
  

  constructor() { 
    
  }

  ngOnInit(): void {
    this.slider = new MDCSlider(document.querySelector('.mdc-slider'));
    this.slider.listen('MDCSlider:change', () => console.log(`Value changed to ${this.slider.value}`));
  }

}
