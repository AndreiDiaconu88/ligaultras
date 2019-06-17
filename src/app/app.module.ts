import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/nav/navbar.component';
import { ProfileInfoComponent } from './profile/profile-info.component';
import { SkillChallengesComponent } from './skill-challenges/skill-challenges.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    HeaderComponent,
    NavbarComponent,
    SkillChallengesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
