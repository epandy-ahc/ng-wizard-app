import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStep3Component } from './wizard-step3.component';

describe('WizardStep3Component', () => {
  let component: WizardStep3Component;
  let fixture: ComponentFixture<WizardStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
