import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonsterHarvestPageRoutingModule } from './monster-harvest-routing.module';

import { MonsterHarvestPage } from './monster-harvest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonsterHarvestPageRoutingModule
  ],
  declarations: [MonsterHarvestPage]
})
export class MonsterHarvestPageModule {}
