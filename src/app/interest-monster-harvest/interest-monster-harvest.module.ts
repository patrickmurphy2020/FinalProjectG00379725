import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestMonsterHarvestPageRoutingModule } from './interest-monster-harvest-routing.module';

import { InterestMonsterHarvestPage } from './interest-monster-harvest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestMonsterHarvestPageRoutingModule
  ],
  declarations: [InterestMonsterHarvestPage]
})
export class InterestMonsterHarvestPageModule {}
