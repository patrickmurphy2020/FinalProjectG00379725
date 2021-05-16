import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumberOfGamesWantedPageRoutingModule } from './number-of-games-wanted-routing.module';

import { NumberOfGamesWantedPage } from './number-of-games-wanted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumberOfGamesWantedPageRoutingModule
  ],
  declarations: [NumberOfGamesWantedPage]
})
export class NumberOfGamesWantedPageModule {}
