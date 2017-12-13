import { Injectable } from '@angular/core';
import { myUser } from './myUser';
import { listOfUsers } from './mock-users';

@Injectable()
export class UserserviceService {

  constructor() { }
  getUsers(): myUser[] {
    return listOfUsers;
    }

    addUser(item: myUser): void {
         listOfUsers.push(item);
      }or() { }

}
