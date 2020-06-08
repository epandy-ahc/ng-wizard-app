import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule} from 'ng-zorro-antd';
import { WizardStep1Component } from './wizard-step1/wizard-step1.component';
import { WizardStep2Component } from './wizard-step2/wizard-step2.component';
import { WizardStep3Component } from './wizard-step3/wizard-step3.component';
import { WizardStepDirective } from './wizard-step.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PaymentWizardComponent,
    WizardStep1Component,
    WizardStep2Component,
    WizardStep3Component,
    WizardStepDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzStepsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
