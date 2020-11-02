import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOrganizationTreeComponent } from './upload-organization-tree.component';

describe('UploadOrganizationTreeComponent', () => {
  let component: UploadOrganizationTreeComponent;
  let fixture: ComponentFixture<UploadOrganizationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOrganizationTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOrganizationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
