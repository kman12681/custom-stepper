import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperComponent } from './mat-stepper.component';
import { RouterModule, Routes } from '@angular/router';
import { TenantTreeComponent } from './tenant-tree/tenant-tree.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { GeneralInformationComponent } from './general-information/general-information.component';
import { CoverageInformationComponent } from './coverage-information/coverage-information.component';
import { SummaryComponent } from './summary/summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperService } from './services/mat-stepper.service';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [{ path: '', component: MatStepperComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TreeViewModule,
  ],
  declarations: [
    MatStepperComponent,
    TenantTreeComponent,
    StepperComponent,
    GeneralInformationComponent,
    CoverageInformationComponent,
    SummaryComponent
  ],
  providers: [MatStepperService, MatDatepickerModule]
})
export class MyMatStepperModule {}
