import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-interest-outlaws',
  templateUrl: './interest-outlaws.page.html',
  styleUrls: ['./interest-outlaws.page.scss'],
})
export class InterestOutlawsPage implements OnInit {
  InterestInGame:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }
//save their choice
  ngOnInit() {
    this.storage.get("saveOutlaws")
    .then((data)=>{
      this.InterestInGame=data;
    })
    .catch()
   }
 //send them back to the home screen
   saveOutlaws()
   {
     this.storage.set('saveOutlaws',this.InterestInGame)
     .then(()=>{
       this.navCtrl.navigateBack('/home');
     })
     .catch()
   }

}
