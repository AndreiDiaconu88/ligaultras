import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  playerClicked: boolean;
  skillClicked: boolean;

  constructor() {
    this.playerClicked = true;
    this.skillClicked = false;
  }

  togglePlayer() {
    console.log("11 " + this.playerClicked);

    this.playerClicked = !this.playerClicked;
    console.log("12 " + this.playerClicked);
  }

  toggleSkill() {
    console.log("1 " + this.playerClicked);
    this.skillClicked = !this.skillClicked;
    console.log("2 " + this.playerClicked);
  }

  ngOnInit() {

  }
}
