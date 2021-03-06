import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberPlate } from './models/model';
import { NumberplatesService } from './services/numberplates.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormService } from './components/form/services/form.service';
import { FormValidatorService } from './components/form/services/form-validation.service';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormService, FormValidatorService]
})
export class AppComponent implements OnInit {
  public numberPlates: NumberPlate[];

  constructor(
    private formService: FormService,
    private dialog: MatDialog,
    private numberplateService: NumberplatesService
  ) { }


  ngOnInit(): void {
    this.numberplateService.getNumberplates().subscribe(numberplates => (this.numberPlates = numberplates));
  }

  get numberPlateForm(): FormGroup {
    return this.formService.form;
  }

  // Executed when Edit button is pressed
  onEdit(numberPlate: NumberPlate): void {
    // Open editing modal with record information
    const dialogRef = this.dialog.open(UserModalComponent, {
      disableClose: false,
      data: {
        numberPlate
      }
    });

    // When modal is closed - save information
    dialogRef.afterClosed().subscribe(data => {
      // TODO: Do action after dialog close
      if (data && data.value){
        this.numberplateService.amendNumberplate(numberPlate.id, data.value).subscribe();
        window.location.reload();
      }
    });
  }

  // Executed when Delete button is pressed
  onDelete(numberPlate: NumberPlate): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(data => {
      // TODO: Do action after dialog close
      if (data && data.value === 'yes'){
        // Remove from UI
        this.numberPlates = this.numberPlates.filter(t => t.id !== numberPlate.id);
        // Remove from Server
        this.numberplateService.deleteNumberplate(numberPlate).subscribe();
      }
    });
  }

  addNumberplate(): void {
    // Check if numberplate already exists
    const toCheck = this.numberPlates.some(data => data.numberPlate === this.numberPlateForm.value.numberPlate);

    if (!toCheck){
      this.numberplateService.addNumberplate(this.numberPlateForm.value).subscribe();
      window.location.reload();
    }
    else {
      alert ('This numberplate already exists!');
    }
  }
}
