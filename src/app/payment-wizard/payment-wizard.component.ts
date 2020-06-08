import {AfterViewChecked, AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IWizardStep} from '../iwizard-step';
import {WizardStep1Component} from '../wizard-step1/wizard-step1.component';
import {WizardStep3Component} from '../wizard-step3/wizard-step3.component';
import {WizardStep2Component} from '../wizard-step2/wizard-step2.component';
import {WizardStepDirective} from '../wizard-step.directive';

@Component({
  selector: 'app-payment-wizard',
  template: `
    <nz-steps [nzCurrent]="current">
      <nz-step nzTitle="Step 1"></nz-step>
      <nz-step nzTitle="Step 2"></nz-step>
      <nz-step nzTitle="Step 3"></nz-step>
    </nz-steps>

    <div class="steps-content" [ngSwitch]="current">
      <app-wizard-step1 *ngSwitchCase="0" appWizardStep></app-wizard-step1>
      <app-wizard-step2 *ngSwitchCase="1" appWizardStep></app-wizard-step2>
      <app-wizard-step3 *ngSwitchCase="2" appWizardStep></app-wizard-step3>
    </div>

    <div class="steps-action">
      <button nz-button nzType="default" (click)="pre()" *ngIf="current > 0">
        <span>Previous</span>
      </button>
      <button nz-button nzType="default" (click)="next()" *ngIf="current < 2">
        <span>Next</span>
      </button>
      <button nz-button nzType="primary" (click)="done()" *ngIf="current === 2">
        <span>Done</span>
      </button>
    </div>
  `,
  styles: [
    `
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }
    `
  ]
})
export class PaymentWizardComponent implements AfterViewInit, AfterViewChecked {

  current = 0;
  index = 'First-content';

  // @ViewChild(WizardStepDirective)
  // private step1Component: WizardStepDirective;
  //
  // @ViewChild(WizardStep2Component)
  // private step2Component: WizardStep2Component;
  //
  // @ViewChild(WizardStep3Component)
  // private step3Component: WizardStep3Component;

  @ViewChildren(WizardStepDirective, {read: IWizardStep})
  steps: QueryList<IWizardStep>;

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() {
  }

  ngAfterViewInit(){
    // console.log('AfterViewInit', this.step1Component, this.step2Component, this.step3Component);

    this.steps.changes.subscribe( (result) => {
      console.log('ViewChildren Query Result', result);
    });

    // if (this.step1Component) {
    //   //console.log(this.step1Component.stepName);
    // }
    //
    // if (this.step2Component) {
    //   console.log(this.step2Component.stepName);
    // }
    //
    // console.log('AfterViewInit, Steps:', this.steps);
  }

  ngAfterViewChecked() {
    // // tslint:disable-next-line:max-line-length
    // //console.log('AfterViewChecked', this.step1Component ? 'step1Component' : 'empty', this.step2Component ? 'step2Component' : 'empty', this.step3Component ? 'step3Component' : 'empty');
    // console.log('AfterViewChecked, Steps:', this.steps);
    // console.log('Directive', this.step1Component);
  }
}
