import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileInfoComponent } from './profile/profile-info.component';
import { SkillChallengesComponent } from './skill-challenges/skill-challenges.component';

const routes: Routes = [
  { path: 'profile', component: ProfileInfoComponent },
  { path: 'skill-challenge', component: SkillChallengesComponent },
  { path: '**', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
