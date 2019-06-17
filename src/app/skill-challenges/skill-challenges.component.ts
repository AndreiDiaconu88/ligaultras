import { Component } from '@angular/core';
import { PlayerService } from 'src/app/core/player.service';
import { Player } from 'src/app/player';

import { ChallengePlayer } from './../challenge-player';

@Component({
  selector: "app-skill-challenges",
  templateUrl: "./skill-challenges.component.html",
  styleUrls: ["./skill-challenges.component.scss"]
})
export class SkillChallengesComponent {
  challengers: ChallengePlayer;
  player: Player;
  returnedGift: any;
  errorMessage: string;
  modalOpened: boolean;

  constructor(private playerService: PlayerService) {
    this.playerService.getChallengeGroup().subscribe(
      players => {
        this.challengers = players;
      },
      error => (this.errorMessage = error)
    );

    this.playerService.getPlayerInfo().subscribe(
      (player: Player) => this.player = player,
      error => (this.errorMessage = error)
    );
  }

  collectPopup() {
    this.modalOpened = true;
    this.playerService.collectGift(this.player.userId).subscribe(
      (data: any) => {
        this.returnedGift = data;
        console.log(this.returnedGift);
      },
      error => this.errorMessage = error
    );

    //handling the sum of the response gold value with the header gold
  }
}
