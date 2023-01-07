import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function len(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string | null = control.value;
    if (!value || value.length < min) {
      return {len: {value: true}}
    }
    return null;
  };
}

export function upper(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string | null = control.value;
    if (!value || value.toLowerCase() === value) {
      return {upper: {value: true}}
    }
    return null;
  };
}

export function lower(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string | null = control.value;
    if (!value || value.toUpperCase() === value) {
      return {lower: {value: true}}
    }
    return null;
  };
}

export function num(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string | null = control.value;
    if (!value || value.search(/\d/) === -1) {
      return {num: {value: true}}
    }
    return null;
  };
}

export function confirm(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')
    const conf = control.get('confirm')

    if (!password?.value || !conf?.value || conf.value != password.value) {
      return {confirm: {value: true}}
    }
    return null;
  };
}
