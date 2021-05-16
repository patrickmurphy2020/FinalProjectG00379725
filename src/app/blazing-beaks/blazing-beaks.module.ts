import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlazingBeaksPageRoutingModule } from './blazing-beaks-routing.module';

import { BlazingBeaksPage } from './blazing-beaks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlazingBeaksPageRoutingModule
  ],
  declarations: [BlazingBeaksPage]
})
export class BlazingBeaksPageModule {}
