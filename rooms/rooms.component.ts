import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms = [
    {
      "id": 1,
      "type": "Presidential",
      "price": "499",
      "image": "../../assets/presidential.jpg",
      "description": "2 king size beds"
    },
    {
      "id":2,
      "type": "Presidential",
      "price": "499",
      "image": "../../assets/presidential.jpg",
      "description": "2 king size beds"
    },
    {
      "id": 3,
      "type": "Presidential",
      "price": "499",
      "image": "../../assets/presidential.jpg",
      "description": "2 king size beds"
    },
    {
      "id": 4,
      "type": "Imperial",
      "price": "449",
      "image": "../../assets/imperial.jpg",
      "description": "2 queen size beds"
    },
    {
      "id": 5,
      "type": "Imperial",
      "price": "449",
      "image": "../../assets/imperial.jpg",
      "description": "2 queen size beds"
    },
    {
      "id": 6,
      "type": "Imperial",
      "price": "449",
      "image": "../../assets/imperial.jpg",
      "description": "2 queen size beds"
    },
    {
      "id": 7,
      "type": "Presidential",
      "price": "499",
      "image": "../../assets/presidential.jpg",
      "description": "2 king size beds"
    },
    {
      "id": 8,
      "type": "Imperial",
      "price": "449",
      "image": "../../assets/imperial.jpg",
      "description": "2 queen size beds"
    },
    {
      "id": 9,
      "type": "Presidential",
      "price": "499",
      "image": "../../assets/presidential.jpg",
      "description": "2 king size beds"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
