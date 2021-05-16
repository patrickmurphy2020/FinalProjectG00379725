import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentEvilPage } from './resident-evil.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentEvilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentEvilPageRoutingModule {}
