import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclelifeComponent } from './cyclelife.component';

describe('CyclelifeComponent', () => {
  let component: CyclelifeComponent;
  let fixture: ComponentFixture<CyclelifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclelifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclelifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
