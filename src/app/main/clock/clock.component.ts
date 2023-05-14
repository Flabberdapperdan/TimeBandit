import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  rawTime: number = 0;
  milliseconds: string = '00';
  seconds: string = '00';
  minutes: string = '00';
  money: number = 0;
  intervalId: number = 0;
  @Input() wageArray: number[] = [];

  //clock functions
  pause = () => {
    window.clearInterval(this.intervalId);
  };
  play = () => {
    const id = this.timer();
    this.intervalId = id;
  };
  reset = () => {
    this.rawTime = 0;
    this.seconds = '00';
    this.milliseconds = '00';
    this.money = 0;
  };
  // this counts too fast??!?!
  // now its good but double the check the math on the minutes, that's fucky
  timer = () => {
    return window.setInterval(() => {
      this.rawTime++;
      this.money = this.moneyTimeMultiplier(this.wageArray);
      this.milliseconds = (this.rawTime % 100)
        .toFixed(0)
        .toString()
        .padStart(2, '0');
      this.seconds = Math.floor(this.rawTime / 100)
        .toFixed(0)
        .toString()
        .padStart(2, '0');
      this.minutes = (this.rawTime / 60 ** 60)
        .toFixed(0)
        .toString()
        .padStart(2, '0');
    }, 10);
  };

  //money functions
  moneyTimeMultiplier = (wageArray: number[]): number => {
    var subtotal: number = 0;
    wageArray.forEach((number) => {
      subtotal += number;
    });
    const total = ((subtotal / 60 ** 2) * this.rawTime) / 100;
    return total;
  };
}
