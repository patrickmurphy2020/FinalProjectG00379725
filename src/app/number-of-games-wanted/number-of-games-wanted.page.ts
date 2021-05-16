import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-of-games-wanted',
  templateUrl: './number-of-games-wanted.page.html',
  styleUrls: ['./number-of-games-wanted.page.scss'],
})
export class NumberOfGamesWantedPage implements OnInit {
  numberOfGames:number = 0;
  hiddenConsole = true;
  hiddenPC = true;
  constructor() { }

  ngOnInit() {
  }

  count()
  {
    this.numberOfGames++;
  }

  showConsole()
  {
    if (this.hiddenConsole == true)
    {
      this.hiddenConsole = false
    }
    else{
      this.hiddenConsole = true;
    }
  }

  showPc()
  {
    if (this.hiddenPC == true)
    {
      this.hiddenPC = false
    }
    else{
      this.hiddenPC = true;
    }
  }
}
