import {
  FormControl,
  ValidatorFn,
  AsyncValidatorFn,
  AbstractControlOptions
} from '@angular/forms';

// created this class extending FormControl to pass user-facing labels to the Summary component

export class KeithControl extends FormControl {
  // set a variable for the label

  label: string;

  constructor(
    formLabel?: string,
    formState?: any,
    validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
  ) {
    super(formState, validatorOrOpts, asyncValidator);

    // assign the property

    this.label = formLabel;
  }
}
