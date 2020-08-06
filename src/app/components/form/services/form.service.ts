import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidatorService } from './form-validation.service';

@Injectable()
export class FormService {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private formValidatorService: FormValidatorService) {
    this.form = this.fb.group({
      name: [null],
      surname: [null],
      numberPlate: [null]
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
