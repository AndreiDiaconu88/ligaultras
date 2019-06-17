import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../core/player.service';
import { Player } from '../player';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  player: Player;
  errorMessage: string;

  constructor(private playerService: PlayerService) {
    this.playerService.getPlayerInfo().subscribe(
      (playerInfo: Player) => {
        this.player = playerInfo;
        console.log('the player is:  ' + this.player);
      },
      error => this.errorMessage = error
    );
  }

  ngOnInit() {

  }
}
