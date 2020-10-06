import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainOrganizationComponent} from './main-organization.component';

describe('MainComponent', () => {
  let component: MainOrganizationComponent;
  let fixture: ComponentFixture<MainOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainOrganizationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
