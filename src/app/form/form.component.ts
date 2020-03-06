import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup'
import { Validators } from '@angular/forms';
import { DataService } from '../services/data.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signup = new Signup("","","","","","","");
  submited = false;
  
  onSubmit() {
    this.submited = true;
  }
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  newForm () {
    this.signup = new Signup("","","","","","","");
  }

  createUsername(username) {
    this.data.changeUsername(this.signup.userName);
    // this.data.changeMessage(this.signup.passWord);
  }
  createPassword(passWord) {
    this.data.changePassword(this.signup.passWord)
  }
}
