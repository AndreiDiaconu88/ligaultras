import { Component } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent{
  playerClicked: boolean;
  skillClicked: boolean;

  constructor() {
    this.playerClicked = true;
  }

  togglePlayer() {
    this.playerClicked = true;
  }

  toggleSkill() {
    this.playerClicked = false;
  }
}
