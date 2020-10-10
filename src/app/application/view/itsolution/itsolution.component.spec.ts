import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsolutionComponent } from './itsolution.component';

describe('ItsolutionComponent', () => {
  let component: ItsolutionComponent;
  let fixture: ComponentFixture<ItsolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
