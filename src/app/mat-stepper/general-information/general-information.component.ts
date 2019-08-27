import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KeithControl } from '../keith-control';
import { MatStepperService } from '../services/mat-stepper.service';
import {
  Suffix,
  Gender,
  Race,
  Ethnicity,
  Language
} from '../interfaces/mat-stepper.types';
import { Subscription } from 'rxjs';
import { AsYouType } from 'libphonenumber-js';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnDestroy {
  @Output()
  generalInfoForm = new EventEmitter<FormGroup>();

  suffix: Suffix[];
  gender: Gender[];
  race: Race[];
  ethnicity: Ethnicity[];
  language: Language[];
  formattedPhoneNumber: string;
  formattedSSN: string;

  generalInfo = new FormGroup({
    FirstName: new KeithControl('First Name', String(), Validators.required),
    MiddleName: new KeithControl('Middle Name', String()),
    LastName: new KeithControl('Last Name', String(), Validators.required),
    Suffix: new KeithControl('Suffix', String()),
    DOB: new KeithControl('Date of Birth', Date, Validators.required),
    Gender: new KeithControl('Gender', String()),
    Race: new KeithControl('Race', String()),
    Ethnicity: new KeithControl('Ethnicity', String()),
    SpokenLanguage: new KeithControl('Spoken Language', String()),
    WrittenLanguage: new KeithControl('Written Language', String()),
    SSN: new KeithControl('Social Security Number', String(), {
      validators: [Validators.pattern(/^(\d{3}-?\d{2}-?\d{4})+$/gm)],
      updateOn: 'blur'
    }),
    PhoneNumber: new KeithControl('Phone Number', String(), {
      validators: [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14)
      ],
      updateOn: 'blur'
    })
  });

  sub: Subscription;

  phoneInvalid = false;

  showClear: any = {};

  showRequired: any = {};
  requiredMessage = 'This field is required';

  constructor(matStepperService: MatStepperService) {
    this.suffix = matStepperService.getSuffixList();
    this.gender = matStepperService.getGenderList();
    this.race = matStepperService.getRaceList();
    this.ethnicity = matStepperService.getEthnicityList();
    this.language = matStepperService.getSpokenLanguageList();

    this.setObjProp(this.generalInfo.value, this.showRequired, true);
    this.setObjProp(this.generalInfo.value, this.showClear, false);

    this.sub = this.generalInfo.valueChanges.subscribe(value => {
      this.showClearButton();
      this.showRequiredText();
      this.checkPhoneValid();
      this.generalInfoForm.emit(this.generalInfo);
    });
  }

  // initializing object properties based off the inputted Object
  setObjProp(form: object, obj: object, init: boolean, excludes?: string[]) {
    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        obj[key] = init;
      }
    }

    return obj;
  }

  // formatting for phone number, uses 3rd party library
  onKey(input) {
    this.formattedPhoneNumber = new AsYouType('US').input(input.target.value);
  }

  // formatting for SSN
  onDashCheck(input) {
    if (input.key !== 'Backspace') {
      this.formattedSSN = input.target.value;
      if (this.formattedSSN.length === 3 || this.formattedSSN.length === 6) {
        this.generalInfo.get('SSN').setValue(this.formattedSSN + '-');
      } else if (this.formattedSSN.length <= 10) {
        this.generalInfo.get('SSN').setValue(this.formattedSSN);
      }
    }
  }

  // allows SSN to be pasted and then formatted, rather than typed
  onPaste(input: ClipboardEvent) {
    input.preventDefault();
    const clipboardData = input.clipboardData;
    let text = clipboardData.getData('text');

    text = text.substr(0, 3) + '-' + text.substr(3, 2) + '-' + text.substr(5);

    this.formattedSSN = text;
    this.generalInfo.get('SSN').setValue(text);
  }

  showClearButton() {
    for (const key in this.showClear) {
      if (this.showClear.hasOwnProperty(key)) {
        this.showClear[key] = !!this.generalInfo.value[key] ? true : false;
      }
    }
  }

  clearInput(input) {
    this.generalInfo.get(input).reset();
  }

  showRequiredText() {
    for (const key in this.showRequired) {
      if (this.showRequired.hasOwnProperty(key)) {
        this.showRequired[key] = !!this.generalInfo.value[key] ? false : true;
      }
    }
  }

  checkPhoneValid() {
    if (!this.generalInfo.get('PhoneNumber').valid) {
      this.phoneInvalid = true;
    } else {
      this.phoneInvalid = false;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
