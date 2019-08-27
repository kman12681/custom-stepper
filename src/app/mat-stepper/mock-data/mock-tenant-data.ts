import { Tenant } from '../interfaces/mat-stepper.types';

export const mockTenants: Tenant[] = [
  {
    TenantTaxnmySK: 6,
    ParentTenantTaxnmySK: null,
    TenantTaxnmyName: 'Global',
    TenantTaxnmyType: 'Global',
    children: [
      {
        TenantTaxnmySK: 4,
        ParentTenantTaxnmySK: 6,
        TenantTaxnmyName: 'KeithMgmtCorp',
        TenantTaxnmyType: 'Tenant',
        children: [
          {
            TenantTaxnmySK: 3,
            ParentTenantTaxnmySK: 4,
            TenantTaxnmyName: 'KeithCompany',
            TenantTaxnmyType: 'PopGrp'
          }
        ]
      }
    ]
  }
];
