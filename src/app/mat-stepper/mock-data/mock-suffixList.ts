import { Suffix } from '../interfaces/mat-stepper.types';

enum Suffixes {
  JR = 'Jr',
  SR = 'Sr',
  Third = 'III',
  Fourth = 'IV',
  Fifth = 'V'
}

export const mockSuffixList: Suffix[] = [
  { Suffix: Suffixes.JR },
  { Suffix: Suffixes.SR },
  { Suffix: Suffixes.Third },
  { Suffix: Suffixes.Fourth },
  { Suffix: Suffixes.Fifth }
];
