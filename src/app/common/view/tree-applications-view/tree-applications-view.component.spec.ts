import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TreeApplicationsViewComponent} from './tree-applications-view.component';

describe('OrganizationViewComponent', () => {
  let component: TreeApplicationsViewComponent;
  let fixture: ComponentFixture<TreeApplicationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeApplicationsViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeApplicationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
