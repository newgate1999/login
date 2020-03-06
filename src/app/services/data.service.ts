import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import {FormComponent} from '../form/form.component'
import { LoginFormComponent } from '../login-form/login-form.component';
import { Login } from '../login'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  messageSource = new BehaviorSubject<string>("message");
  currentMessage = this.messageSource.asObservable();
  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

  constructor() { }
 
  // method này để change source message 
  changeUsername(username) {
    this.messageSource.next(username);
    // this.messageSource.next(password);
  }
  changePassword(password) {
    this.messageSource.next(password);
    // this.messageSource.next(password);
  }
}