import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  currenTime: number = 0;
  money: number = 0;
  interval: number = 0;
  temporaryWageArray: number[] = [12.5, 13.5];

  //clock functions
  pause = () => {
    window.clearInterval(this.interval);
  };
  play = () => {
    const id = this.timer();
    this.interval = id;
  };
  reset = () => {
    this.currenTime = 0;
    this.money = 0;
  };
  timer = () => {
    return window.setInterval(() => {
      this.currenTime++;
      this.money = this.moneyTimeMultiplier(this.temporaryWageArray);
    }, 1000);
  };

  //money functions
  moneyTimeMultiplier = (wageArray: number[]): number => {
    var subtotal: number = 0;
    wageArray.forEach((number) => {
      subtotal += number;
    });
    const total = (subtotal / 60 ** 2) * this.currenTime;
    return total;
  };
}
