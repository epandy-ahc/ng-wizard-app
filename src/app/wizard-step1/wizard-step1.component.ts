import {Component, forwardRef, OnInit} from '@angular/core';
import {IWizardStep} from '../iwizard-step';

@Component({
  selector: 'app-wizard-step1',
  templateUrl: './wizard-step1.component.html',
  styleUrls: ['./wizard-step1.component.css'],
  providers: [
    {provide: IWizardStep, useExisting: forwardRef(() => WizardStep1Component) }
  ]
})
export class WizardStep1Component implements OnInit, IWizardStep {

  constructor() { }

  stepName: 'S1';

  ngOnInit(): void {
    console.log(`NGINIT - WizardStep1Component`);
  }

  canMoveNext(): boolean {
    return true;
  }

  canMoveBack(): boolean {
    return true;
  }

  next(): void {
    console.log('NEXT');
  }

  back(): void {
    console.log('BACK');
  }
}


