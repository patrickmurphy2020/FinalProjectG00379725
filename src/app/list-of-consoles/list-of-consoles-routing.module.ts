import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfConsolesPage } from './list-of-consoles.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfConsolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfConsolesPageRoutingModule {}
