import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RefiFluxComponent} from './refi-flux.component';

describe('RefiFluxComponent', () => {
  let component: RefiFluxComponent;
  let fixture: ComponentFixture<RefiFluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefiFluxComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefiFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
