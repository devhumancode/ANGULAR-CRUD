import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../components/form/services/form.service';
import { FormValidatorService } from '../../components/form/services/form-validation.service';
import { NumberPlate } from 'src/app/models/model';
import { NumberplatesService } from '../../services/numberplates.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  providers: [FormService, FormValidatorService]
})
export class UserModalComponent implements OnInit {
  public numberPlate: NumberPlate;

  constructor(
    private formService: FormService,
    public dialogRef: MatDialogRef<UserModalComponent>,
    private numberplateService: NumberplatesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.numberPlate = data.numberPlate;
    }

  ngOnInit(): void {
    this.formService.form.patchValue({
      ...this.numberPlate
    });
  }

  get numberPlateForm(): FormGroup {
    return this.formService.form;
  }

  onSubmit(): void{
    this.dialogRef.close({
      value: this.numberPlateForm.value
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
