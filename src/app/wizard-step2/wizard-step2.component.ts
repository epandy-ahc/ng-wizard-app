import {Component, forwardRef, OnInit} from '@angular/core';
import {IWizardStep} from '../iwizard-step';

@Component({
  selector: 'app-wizard-step2',
  templateUrl: './wizard-step2.component.html',
  styleUrls: ['./wizard-step2.component.css'],
  providers: [
    {provide: IWizardStep, useExisting: forwardRef(() => WizardStep2Component)}
  ]
})
export class WizardStep2Component implements OnInit, IWizardStep {

  constructor() { }

  stepName: 'S2';

  ngOnInit(): void {
    console.log(`NGINIT - WizardStep2Component`);
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
