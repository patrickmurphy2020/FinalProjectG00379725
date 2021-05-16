import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestBlazingBeaksPage } from './interest-blazing-beaks.page';

const routes: Routes = [
  {
    path: '',
    component: InterestBlazingBeaksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestBlazingBeaksPageRoutingModule {}
