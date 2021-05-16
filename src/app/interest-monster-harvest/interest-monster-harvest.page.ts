import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-interest-monster-harvest',
  templateUrl: './interest-monster-harvest.page.html',
  styleUrls: ['./interest-monster-harvest.page.scss'],
})
export class InterestMonsterHarvestPage implements OnInit {
  InterestInGame:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }
//save their choice
  ngOnInit() {
    this.storage.get("saveMonsterHarvest")
    .then((data)=>{
      this.InterestInGame=data;
    })
    .catch()
   }
 //sent them to the home page once theyve made their choice
   saveMonsterHarvest()
   {
     this.storage.set('saveMonsterHarvest',this.InterestInGame)
     .then(()=>{
       this.navCtrl.navigateBack('/home');
     })
     .catch()
   }

}
