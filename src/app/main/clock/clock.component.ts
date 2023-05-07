import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  time: number = 0;
  interval: number = 0;

  pause = () => {
    window.clearInterval(this.interval);
  };
  play = () => {
    const id = this.timer();
    this.interval = id;
    console.log(id);
    console.log(this.interval);
  };
  reset = () => {
    this.time = 0;
  };
  timer = () => {
    return window.setInterval(() => {
      this.time++;
      console.log(this.time);
    }, 1000);
  };
}
