import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestOutlawsPageRoutingModule } from './interest-outlaws-routing.module';

import { InterestOutlawsPage } from './interest-outlaws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestOutlawsPageRoutingModule
  ],
  declarations: [InterestOutlawsPage]
})
export class InterestOutlawsPageModule {}
