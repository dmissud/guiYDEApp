import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticityComponent } from './criticity.component';

describe('CriticityComponent', () => {
  let component: CriticityComponent;
  let fixture: ComponentFixture<CriticityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
