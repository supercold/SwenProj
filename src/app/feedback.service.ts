import { Injectable } from '@angular/core';
import { feedback } from './feedback';
import { listoffeedback } from './mock-feedback';

@Injectable()
export class FeedbackService {

  constructor() { }
  getFeedbacks(): feedback[] {
    return listoffeedback;
    }

    addFeedback(item: feedback): void {
         listoffeedback.push(item);
      }

}
