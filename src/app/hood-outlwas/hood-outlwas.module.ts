import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoodOutlwasPageRoutingModule } from './hood-outlwas-routing.module';

import { HoodOutlwasPage } from './hood-outlwas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoodOutlwasPageRoutingModule
  ],
  declarations: [HoodOutlwasPage]
})
export class HoodOutlwasPageModule {}
