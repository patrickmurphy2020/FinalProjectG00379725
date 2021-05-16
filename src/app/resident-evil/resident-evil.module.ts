import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentEvilPageRoutingModule } from './resident-evil-routing.module';

import { ResidentEvilPage } from './resident-evil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentEvilPageRoutingModule
  ],
  declarations: [ResidentEvilPage]
})
export class ResidentEvilPageModule {}
