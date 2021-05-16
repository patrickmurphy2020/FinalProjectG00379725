import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheInvisibleHandPageRoutingModule } from './the-invisible-hand-routing.module';

import { TheInvisibleHandPage } from './the-invisible-hand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheInvisibleHandPageRoutingModule
  ],
  declarations: [TheInvisibleHandPage]
})
export class TheInvisibleHandPageModule {}
