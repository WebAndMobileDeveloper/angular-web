import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule, MatListModule, MatExpansionModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from 'app/login/login.component';
import { RegistrationComponent } from 'app/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { Broadcaster } from 'app/share/broadcast';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',      component: RegistrationComponent },
  { path: 'welcome',      component: WelcomeComponent },

  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [Broadcaster],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
