import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxDetailComponent } from './flux-detail.component';

describe('FluxDetailComponent', () => {
  let component: FluxDetailComponent;
  let fixture: ComponentFixture<FluxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
