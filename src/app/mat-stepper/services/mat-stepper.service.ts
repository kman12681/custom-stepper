import { Injectable } from '@angular/core';
import { mockTenants } from '../mock-data/mock-tenant-data';
import { mockLOB } from '../mock-data/mock-lob-data';
import { Tenant } from '../interfaces/mat-stepper.types';
import { mockSuffixList } from '../mock-data/mock-suffixList';
import { mockGenderList } from '../mock-data/mock-genderList';
import { mockRaceList } from '../mock-data/mock-raceList';
import { mockEthnicityList } from '../mock-data/mock-ethnicityList';
import { mockLanguageList } from '../mock-data/mock-languageList';

@Injectable()
export class MatStepperService {
  tenants: Tenant[] = mockTenants;

  lob = mockLOB;

  suffixList = mockSuffixList;

  genderList = mockGenderList;

  raceList = mockRaceList;

  ethnicityList = mockEthnicityList;

  languageList = mockLanguageList;

  constructor() {}

  getTenants() {
    return this.tenants;
  }

  getLOB() {
    return this.lob;
  }

  getSuffixList() {
    return this.suffixList;
  }

  getGenderList() {
    return this.genderList;
  }

  getRaceList() {
    return this.raceList;
  }

  getEthnicityList() {
    return this.ethnicityList;
  }

  getSpokenLanguageList() {
    return this.languageList;
  }
}
