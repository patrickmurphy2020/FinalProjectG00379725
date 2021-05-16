import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-interest-invisible-hand',
  templateUrl: './interest-invisible-hand.page.html',
  styleUrls: ['./interest-invisible-hand.page.scss'],
})
export class InterestInvisibleHandPage implements OnInit {
  InterestInGame:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }
//save their choice
  ngOnInit() {
    this.storage.get("saveInvisibleHand")
    .then((data)=>{
      this.InterestInGame=data;
    })
    .catch()
   }
 //send them back to the home page once theyve made their choice
   saveInvisibleHand()
   {
     this.storage.set('saveInvisibleHand',this.InterestInGame)
     .then(()=>{
       this.navCtrl.navigateBack('/home');
     })
     .catch()
   }
}
