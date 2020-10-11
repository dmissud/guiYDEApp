import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainTreeApplicationsComponent} from './main-tree-applications.component';

describe('MainComponent', () => {
  let component: MainTreeApplicationsComponent;
  let fixture: ComponentFixture<MainTreeApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTreeApplicationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTreeApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
