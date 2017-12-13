import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { myUser } from '../myUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm1: FormGroup;
  edited1 = false;
  thisone1 = "";
  store1: myUser[] = [];
  newItem1 : myUser;

  constructor(private fb: FormBuilder, private userService: UserserviceService) { }

  ngOnInit() {
    this.myForm1 = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit()
  {
    this.edited1 = true;

    this.newItem1 = new myUser();
    this.newItem1.username = this.myForm1.value.username;
    this.newItem1.password = this.myForm1.value.password;


    this.userService.addUser(this.newItem1);

    this.myForm1.reset();

    this.store1 = this.userService.getUsers();
    let arrayLastIndex = this.store1.length-1;
   this.thisone1 = this.store1[arrayLastIndex].username;

}
}