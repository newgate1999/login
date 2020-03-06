import { Component, OnInit } from '@angular/core';
import { Login} from '../login'
import { DataService } from '../services/data.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  login = new Login(this.username, this.password);
  submited = false;

  onSubmit() {
    this.submited = true;
  }
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(username => this.username = username);
    this.data.currentMessage.subscribe(password => this.password = this.password)
  }
}
