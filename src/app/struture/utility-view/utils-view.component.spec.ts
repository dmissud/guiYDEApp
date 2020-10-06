import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UtilsViewComponent} from './utils-view.component';

describe('UtilistySidebarComponent', () => {
  let component: UtilsViewComponent;
  let fixture: ComponentFixture<UtilsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilsViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
