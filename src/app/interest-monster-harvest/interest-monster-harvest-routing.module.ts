import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestMonsterHarvestPage } from './interest-monster-harvest.page';

const routes: Routes = [
  {
    path: '',
    component: InterestMonsterHarvestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestMonsterHarvestPageRoutingModule {}
