import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Broadcaster } from 'app/share/broadcast';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onSideNavClick = new EventEmitter(); 
  currentMenuName:string="Welcome";
  ngOnInit() {
  }
constructor(private broadcaster: Broadcaster){
  this.registerStringBroadcast();
}
  registerStringBroadcast() {
    this.broadcaster.on<string>('MyEvent').subscribe(message => {
      this.currentMenuName=message;
    });
  }

  onSideNavClicked(){
    this.onSideNavClick.emit();
  }

 
}
