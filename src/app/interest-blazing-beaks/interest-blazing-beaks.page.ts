import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-interest-blazing-beaks',
  templateUrl: './interest-blazing-beaks.page.html',
  styleUrls: ['./interest-blazing-beaks.page.scss'],
})
export class InterestBlazingBeaksPage implements OnInit {
  InterestInGame:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }
//save how likely theyu are to buy blazing beaks
  ngOnInit() {
    this.storage.get("saveBlazing")
    .then((data)=>{
      this.InterestInGame=data;
    })
    .catch()
   }
 //send them back to the home page after theve saved their choice
   saveBlazing()
   {
     this.storage.set('saveBlazing',this.InterestInGame)
     .then(()=>{
       this.navCtrl.navigateBack('/home');
     })
     .catch()
   }

}
