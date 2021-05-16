import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumberOfGamesWantedPage } from './number-of-games-wanted.page';

describe('NumberOfGamesWantedPage', () => {
  let component: NumberOfGamesWantedPage;
  let fixture: ComponentFixture<NumberOfGamesWantedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfGamesWantedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberOfGamesWantedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
