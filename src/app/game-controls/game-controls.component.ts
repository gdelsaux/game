import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  interval() {
    setInterval(this.generateNumber, 1000)
  }

  stopInterval() {
    clearInterval()

  }

  generateNumber() {
    console.log(Math.floor(Math.random() * 1000))
  }

  onStart() {
    this.interval();
  }

  onStop() {
    clearInterval()
  }

}
