import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFluxRefiComponent } from './list-flux-refi.component';

describe('ListFluxRefiComponent', () => {
  let component: ListFluxRefiComponent;
  let fixture: ComponentFixture<ListFluxRefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFluxRefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFluxRefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
