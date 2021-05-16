import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestOutlawsPage } from './interest-outlaws.page';

const routes: Routes = [
  {
    path: '',
    component: InterestOutlawsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestOutlawsPageRoutingModule {}
