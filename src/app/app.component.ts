import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FormControl } from '@angular/forms';
import { Broadcaster } from 'app/share/broadcast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList: any;
  slideState: boolean;

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  mode = new FormControl('over');
  events = [];

  shouldRun = true;
  constructor(private broadcaster: Broadcaster) {
    this.menuList = [
      { name: "Home", link: "welcome", placeholder: "Welcome", icon: "dashboard" },
      { name: "Profile", link: "login", placeholder: "Login Here", icon: "account_circle" },
      { name: "People", link: "register", placeholder: "Register Here", icon: "people" },
      { name: "Notifications", link: "register", placeholder: "Register Here", icon: "notifications" },
      { name: "Settings", link: "login", placeholder: "Login Here", icon: "settings" },
      { name: "Share", link: "login", placeholder: "Login Here", icon: "share" },
      { name: "Logout", link: "register", placeholder: "Register Here", icon: "power_settings_new" },

    ];
    this.slideState = false;

  }

  toggleMenu(sidenav){
    sidenav.toggle();
  }
}
