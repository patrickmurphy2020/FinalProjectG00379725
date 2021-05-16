import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoodOutlwasPage } from './hood-outlwas.page';

const routes: Routes = [
  {
    path: '',
    component: HoodOutlwasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoodOutlwasPageRoutingModule {}
