import { Gender } from '../interfaces/mat-stepper.types';

enum Genders {
  Male = 'Male',
  Female = 'Female',
  PreferNotToSay = 'Prefer Not to Say'
}

export const mockGenderList: Gender[] = [
  { Gender: Genders.Male },
  { Gender: Genders.Female },
  { Gender: Genders.PreferNotToSay }
];
