import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestInvisibleHandPage } from './interest-invisible-hand.page';

const routes: Routes = [
  {
    path: '',
    component: InterestInvisibleHandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestInvisibleHandPageRoutingModule {}
