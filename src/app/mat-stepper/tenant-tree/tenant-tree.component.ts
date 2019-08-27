import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Tenant, LOB } from '../interfaces/mat-stepper.types';
import { MatStepperService } from '../services/mat-stepper.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tenant-tree',
  templateUrl: './tenant-tree.component.html',
  styleUrls: ['./tenant-tree.component.scss']
})
export class TenantTreeComponent implements OnDestroy {
  @Output()
  lobInfo = new EventEmitter<FormGroup>();

  @Output()
  selectedTenant = new EventEmitter();

  isPopGrp = false;

  lobForm = new FormGroup({
    LOB: new FormControl('', Validators.required)
  });

  lob: LOB[];
  data: Tenant[];

  sub: Subscription;

  constructor(matStepperService: MatStepperService) {
    this.data = matStepperService.getTenants();
    this.lob = matStepperService.getLOB();

    this.sub = this.lobForm.valueChanges.subscribe(value => {
      this.lobInfo.emit(this.lobForm);
    });
  }

  onSelected(selected) {
    this.selectedTenant.emit(selected.dataItem);
    this.isPopGrp =
      selected.dataItem.TenantTaxnmyType === 'PopGrp' ? true : false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
