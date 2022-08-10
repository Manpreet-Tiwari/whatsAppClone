import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  cardNumber = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
