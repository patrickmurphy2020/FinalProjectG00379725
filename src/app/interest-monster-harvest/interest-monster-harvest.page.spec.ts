import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterestMonsterHarvestPage } from './interest-monster-harvest.page';

describe('InterestMonsterHarvestPage', () => {
  let component: InterestMonsterHarvestPage;
  let fixture: ComponentFixture<InterestMonsterHarvestPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestMonsterHarvestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestMonsterHarvestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
