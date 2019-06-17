import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/player.service';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  player: Player;
  errorMessage: string;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayerInfo().subscribe(
      (playerInfo: Player) => this.player = playerInfo,
      error => this.errorMessage = error
    );
  }

}
