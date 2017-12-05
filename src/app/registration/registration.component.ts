import { Component } from '@angular/core';
import { Broadcaster } from 'app/share/broadcast';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  hide = true;
  constructor(private broadcaster: Broadcaster){
    this.broadcaster.broadcast('MyEvent', 'Register');
  }
}
