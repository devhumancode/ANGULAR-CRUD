import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from './form-validation.service';

@Injectable()
export class FormService {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private formValidatorService: FormValidatorService) {
    this.form = this.fb.group({
      name: [null],
      surname: [null],
      numberPlate: [null, Validators.pattern(`^[A-Z]{3}[0-9]{3}`)]
    });
  }

  get isValid(): boolean {
    if (!this.form.valid) {
      this.formValidatorService.validateAllFormFields(this.form);
      return false;
    }
    return true;
  }
}
