import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFluxComponent } from './upload-flux.component';

describe('UploadFluxComponent', () => {
  let component: UploadFluxComponent;
  let fixture: ComponentFixture<UploadFluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
