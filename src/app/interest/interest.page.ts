import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {
InterestInGame:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
   this.storage.get("save")
   .then((data)=>{
     this.InterestInGame=data;
   })
   .catch()
  }
//save the persons interest in buying resident evil
  save()
  {
    this.storage.set('save',this.InterestInGame)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }

}
