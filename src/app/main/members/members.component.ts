import { Component, Input } from '@angular/core';
import { Member } from '../../Models/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  //@Input() wageArray: number[] = [];
  naam: string = '';
  uurloon: number = 0;

  newMemberName: string = '';
  newMemberWage: number = 0;
  memberArray: Member[] = [];

  submitMember = () => {};
}
