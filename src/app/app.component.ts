import { Component, OnInit } from '@angular/core';
import {GamesService} from './Services/games.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  games:any = [];
  constructor(private service:GamesService) {

  }
  
  //get the data about the games from the url 
  ngOnInit()
  {
    this.service.GetGameData().subscribe( (data)=>{
      this.games = data.GAMES;
      console.log(this.games);
    } );
  }
}
