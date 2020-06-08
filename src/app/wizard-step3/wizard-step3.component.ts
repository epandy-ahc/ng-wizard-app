import {Component, forwardRef, OnInit} from '@angular/core';
import {IWizardStep} from '../iwizard-step';

@Component({
  selector: 'app-wizard-step3',
  templateUrl: './wizard-step3.component.html',
  styleUrls: ['./wizard-step3.component.css'],
  providers: [
    {provide: IWizardStep, useExisting: forwardRef(() => WizardStep3Component)}
  ]
})
export class WizardStep3Component implements OnInit, IWizardStep {

  constructor() { }

  stepName: 'S3';

  ngOnInit(): void {
    console.log(`NGINIT - WizardStep3Component`);
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
