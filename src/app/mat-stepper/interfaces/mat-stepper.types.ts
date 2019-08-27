export interface Tenant {
  TenantTaxnmySK: number;
  ParentTenantTaxnmySK: number;
  TenantTaxnmyName: string;
  TenantTaxnmyType: string;
  children?: Tenant[];
}

export interface LOB {
  LOB: string;
}

export interface Suffix {
  Suffix: string;
}

export interface Gender {
  Gender: string;
}

export interface Race {
  RaceTypeSK: number;
  RaceTypeDesc: string;
}

export interface Ethnicity {
  SampleEthnicitySK: number;
  SampleEthnicityDesc: string;
}

export interface Language {
  LangTypeSK: number;
  LangTypeDesc: string;
}
