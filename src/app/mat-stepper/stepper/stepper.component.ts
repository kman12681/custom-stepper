import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
// tslint:disable-next-line: ban-types
  selectedTenant: Object | undefined;
  lobInfo: FormGroup | undefined;
  generalInfoForm: FormGroup | undefined;
  coverageInfoForm: FormGroup | undefined;

  isStepOneDisabled = true;
  isStepTwoDisabled = true;
  isStepThreeDisabled = true;

// tslint:disable-next-line: ban-types
  setSelectedTenant(selectedTenant: Object) {
    this.selectedTenant = selectedTenant;
  }

  setLobInfo(lobInfo: FormGroup) {
    this.lobInfo = lobInfo;
    this.isStepOneDisabled = !this.lobInfo.valid;
  }

  setGeneralInfoForm(generalInfoForm: FormGroup) {
    this.generalInfoForm = generalInfoForm;
    this.isStepTwoDisabled = !this.generalInfoForm.valid;
  }

  setCoverageInfoForm(coverageInfoForm: FormGroup) {
    this.coverageInfoForm = coverageInfoForm;
    this.isStepThreeDisabled = !this.coverageInfoForm.valid;
  }

  constructor() {}
}
