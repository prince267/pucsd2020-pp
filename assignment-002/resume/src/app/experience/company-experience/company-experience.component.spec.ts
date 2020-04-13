import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExperienceComponent } from './company-experience.component';

describe('CompanyExperienceComponent', () => {
  let component: CompanyExperienceComponent;
  let fixture: ComponentFixture<CompanyExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
