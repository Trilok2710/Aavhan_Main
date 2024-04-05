import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

// static match(controlName: string, matchControlName: string): ValidatorFn {
//     return (controls: AbstractControl) => {
//       const control = controls.get(controlName);
//       const matchControl = controls.get(matchControlName);

//       if (!matchControl?.errors && control?.value !== matchControl?.value) {
//         matchControl?.setErrors({
//           matching: {
//             actualValue: matchControl?.value,
//             requiredValue: control?.value
//           }
//         });
//         return { matching: true };
//       }
//       return null;
//     };
//   }
// static passwordMatchValidator(control: AbstractControl) {
//     const password: string = control.get('password').value; // get password from our password form control
//     const confirmPassword: string = control.get('confirmPass').value; // get password from our confirmPassword form control
//     // compare is the password math
//     if (password !== confirmPassword) {
//       // if they don't match, set an error in our confirmPassword form control
//       control.get('confirmPass').setErrors({ NoPasswordMatch: true });
//     }
//   }

}
