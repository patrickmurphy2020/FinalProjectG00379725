import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberOfGamesWantedPage } from './number-of-games-wanted.page';

const routes: Routes = [
  {
    path: '',
    component: NumberOfGamesWantedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberOfGamesWantedPageRoutingModule {}
