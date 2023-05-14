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
  wage: number = 0;

  newMemberName: string = '';
  newMemberWage: number = 0;
  memberArray: Member[] = [
    { id: 1, name: 'Matthijs', wage: 11 },
    { id: 2, name: 'Renee', wage: 12 },
    { id: 3, name: 'Tjesse', wage: 14 },
  ];

  displayedColumns = ['name', 'wage'];

  submitMember = () => {};
}
