import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Member } from '../../Models/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  //@Input() wageArray: number[] = [];
  naam: string = '';
  wage: number = 0;

  @Output() memberArrayEvent = new EventEmitter<Member>();

  memberArray: Member[] = [
    { id: 1, name: 'Matthijs', wage: 11 },
    { id: 2, name: 'Renee', wage: 12 },
    { id: 3, name: 'Tjesse', wage: 14 },
  ];
  displayedColumns = ['name', 'wage', 'delete'];

  ngOnInit(): void {
    this.memberArray.forEach((member: Member) => {
      this.submitMemberEvent(member);
    });
  }
  submitMemberEvent = (newMember: Member) => {
    this.memberArrayEvent.emit(newMember);
  };
  deleteRow = (id: number) => {
    var newArray: Member[] = [];
    this.memberArray.map((member) => {
      if (member.id == id) {
        return;
      } else {
        newArray.push(member);
      }
    });
    this.memberArray = newArray;
    console.log(newArray);
    console.log(this.memberArray);
  };
}
