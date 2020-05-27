import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTabChanged(event: any){
    console.log("okay")
    console.log(event)
  }

  aboutClicked(event:any){
    console.log("about clicked")
  }

}
