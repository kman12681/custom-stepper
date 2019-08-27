import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KeithControl } from '../keith-control';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coverage-information',
  templateUrl: './coverage-information.component.html',
  styleUrls: ['./coverage-information.component.scss']
})
export class CoverageInformationComponent implements OnDestroy {
  @Output()
  coverageInfoForm = new EventEmitter<FormGroup>();

  coverageInfo = new FormGroup({
    EfctvStrtDt: new KeithControl(
      'Effective Start Date',
      Date(),
      Validators.required
    )
  });

  sub: Subscription;

  constructor() {
    this.sub = this.coverageInfo.valueChanges.subscribe(value => {
      this.coverageInfoForm.emit(this.coverageInfo);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
