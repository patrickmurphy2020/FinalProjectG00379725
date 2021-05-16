import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterestInvisibleHandPage } from './interest-invisible-hand.page';

describe('InterestInvisibleHandPage', () => {
  let component: InterestInvisibleHandPage;
  let fixture: ComponentFixture<InterestInvisibleHandPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestInvisibleHandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestInvisibleHandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
