import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
myStatus:string;
calendars = [];
lat:any;
long:any;
  constructor(private calendar: Calendar,private geolocation: Geolocation) {}

  Calendar()
  {
    this.calendar.listCalendars().then( (data)=>{
      this.calendars = data;
    })
  }

  GPS()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
 
}
