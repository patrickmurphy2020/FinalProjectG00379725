import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheInvisibleHandPage } from './the-invisible-hand.page';

const routes: Routes = [
  {
    path: '',
    component: TheInvisibleHandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheInvisibleHandPageRoutingModule {}
