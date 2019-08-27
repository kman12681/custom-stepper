import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tenant } from '../interfaces/mat-stepper.types';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input()
  set selectedTenant(selectedTenant: Tenant) {
    this.selectedTenantInfo = selectedTenant;
    if (!!this.selectedTenantInfo) {
    }
  }

  @Input()
  set lobInfoField(lobInfo: FormGroup) {
    this.lobInfo = lobInfo;
  }

  @Input()
  set generalInfoForm(generalInfo: FormGroup) {
    this.generalInfo = generalInfo;
    if (!!this.generalInfo) {
      this.generalInfoKeys = Object.keys(this.generalInfo.value);
      this.dateOfBirth = this.generalInfo.value.DOB;
      this.showGeneralInfo = true;
    } else {
      this.showGeneralInfo = false;
    }
  }

  @Input()
  set coverageInfoForm(coverageInfo: FormGroup) {
    this.coverageInfo = coverageInfo;
    if (!!this.coverageInfo) {
      this.coverageInfoKeys = Object.keys(this.coverageInfo.value);
      this.showCoverageInfo = true;
    } else {
      this.showCoverageInfo = false;
    }
  }

  lobInfo: FormGroup | undefined;

  selectedTenantInfo: Tenant | undefined;

  generalInfo: FormGroup | undefined;
  dateOfBirth: Date | undefined;
  generalInfoKeys: string[];
  showGeneralInfo = false;

  coverageInfo: FormGroup | undefined;
  coverageInfoKeys: string[];
  showCoverageInfo = false;

  constructor() {}

  // ngSwitch to check for and display values from array
  //
  // isKeyValueArray(value): boolean {
  // return Array.isArray(value);
  // }

  isDate(value): boolean {
    if (Object.prototype.toString.call(value) === '[object Date]') {
      return true;
    }
  }
}
