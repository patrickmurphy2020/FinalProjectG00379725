import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestBlazingBeaksPageRoutingModule } from './interest-blazing-beaks-routing.module';

import { InterestBlazingBeaksPage } from './interest-blazing-beaks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestBlazingBeaksPageRoutingModule
  ],
  declarations: [InterestBlazingBeaksPage]
})
export class InterestBlazingBeaksPageModule {}
