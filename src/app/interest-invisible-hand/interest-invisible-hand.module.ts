import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestInvisibleHandPageRoutingModule } from './interest-invisible-hand-routing.module';

import { InterestInvisibleHandPage } from './interest-invisible-hand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestInvisibleHandPageRoutingModule
  ],
  declarations: [InterestInvisibleHandPage]
})
export class InterestInvisibleHandPageModule {}
