import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ChallengePlayer } from '../challenge-player';
import { Player } from '../player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  profileUrl = 'http://greenhorsegames.com/tests/frontend/profile.php';
  challengeUrl = 'http://greenhorsegames.com/tests/frontend/challenge.php';
  collectUrl = 'http://greenhorsegames.com/tests/frontend/collect.php';

  constructor(private http: HttpClient) {}

  getPlayerInfo(): Observable<Player> {
    return this.http.get<Player>(this.profileUrl).pipe(
      tap(data => console.log('All players: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getChallengeGroup(): Observable<ChallengePlayer> {
    return this.http.get<ChallengePlayer>(this.challengeUrl).pipe(
      tap(data => console.log('All challengers: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  collectGift(userId: number): any {
    return this.http.post(this.collectUrl, userId)
    .pipe(
      tap(data => console.log('Gift: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Client-side or network error with the message: ${
        err.error.message
      }`;
    } else {
      errorMessage = `Server-side error with the message: ${
        err.message
      } and the code ${err.status}`;
    }
    console.warn(errorMessage);
    return throwError(errorMessage);
  }
}
