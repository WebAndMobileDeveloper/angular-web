import { Component } from '@angular/core';
import { Broadcaster } from 'app/share/broadcast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  constructor(private broadcaster: Broadcaster){
    this.broadcaster.broadcast('MyEvent', 'Login');
  }
}
