import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfConsolesPageRoutingModule } from './list-of-consoles-routing.module';

import { ListOfConsolesPage } from './list-of-consoles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfConsolesPageRoutingModule
  ],
  declarations: [ListOfConsolesPage]
})
export class ListOfConsolesPageModule {}
