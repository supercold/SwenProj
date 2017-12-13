import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { myUser } from '../myUser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  edited = false;
  thisone = "";
  store: myUser[] = [];
  newItem : myUser;

  constructor(private fb: FormBuilder, private userService: UserserviceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required]
    });
  }
    onSubmit()
    {
      this.edited = true;

      this.newItem = new myUser();
      this.newItem.username = this.myForm.value.username;
      this.newItem.password = this.myForm.value.password;
      this.newItem.repassword = this.myForm.value.repassword;
      this.newItem.email = this.myForm.value.email;

      this.userService.addUser(this.newItem);

      this.myForm.reset();

      this.store = this.userService.getUsers();
      let arrayLastIndex = this.store.length-1;
     this.thisone = this.store[arrayLastIndex].username;

  }
}