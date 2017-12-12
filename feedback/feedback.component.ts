import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback.service';
import { feedback } from '../feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  myForm: FormGroup;
  edited = false;
  thisone = "";
  store: feedback[] = [];
  newItem : feedback;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) { }
  
    ngOnInit() {
      this.myForm = this.fb.group({
        customername: ['', Validators.required],
        periodofstay: ['', Validators.required],
        feedback: ['', Validators.required],
      });
    }
      onSubmit()
      {
        this.edited = true;
  
        this.newItem = new feedback();
        this.newItem.customername = this.myForm.value.customername;
        this.newItem.periodofstay = this.myForm.value.periodofstay;
        this.newItem.feedback = this.myForm.value.feedback;

  
        this.feedbackService.addFeedback(this.newItem);
  
        this.myForm.reset();
  
        this.store = this.feedbackService.getFeedbacks();
        let arrayLastIndex = this.store.length-1;
       this.thisone = this.store[arrayLastIndex].customername;
  
    }
  }