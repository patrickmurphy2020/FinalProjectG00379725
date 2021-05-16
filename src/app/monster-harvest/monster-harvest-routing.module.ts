import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterHarvestPage } from './monster-harvest.page';

const routes: Routes = [
  {
    path: '',
    component: MonsterHarvestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonsterHarvestPageRoutingModule {}
