import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterestBlazingBeaksPage } from './interest-blazing-beaks.page';

describe('InterestBlazingBeaksPage', () => {
  let component: InterestBlazingBeaksPage;
  let fixture: ComponentFixture<InterestBlazingBeaksPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestBlazingBeaksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestBlazingBeaksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
