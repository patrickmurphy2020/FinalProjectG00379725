import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlazingBeaksPage } from './blazing-beaks.page';

const routes: Routes = [
  {
    path: '',
    component: BlazingBeaksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlazingBeaksPageRoutingModule {}
