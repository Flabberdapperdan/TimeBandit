import { Component } from '@angular/core';
import { Member } from '../Models/Member';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  memberArray: Member[] = [];

  addMember = (newMember: Event) => {
    console.log(newMember);

    //this.memberArray.push(newMember);
  };
}
