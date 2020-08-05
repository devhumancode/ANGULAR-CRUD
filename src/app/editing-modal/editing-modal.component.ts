import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Numberplate } from '../models/Numberplate';
import { NumberplatesService } from '../services/numberplates.service';

@Component({
  selector: 'app-editing-modal',
  templateUrl: './editing-modal.component.html',
  styleUrls: ['./editing-modal.component.scss']
})
export class EditingModalComponent implements OnInit {
@Input() editnumberplate: Numberplate;
@Output() amendNumberplate: EventEmitter<Numberplate> = new EventEmitter;
  name:string;
  surname:string;
  letters:string;
  numbers:number;
  id:number;

  constructor(private numberplatesService:NumberplatesService) { }

  ngOnInit(): void {
  }

  onSubmit () {
    const numberplate = {
      name: this.name,
      surname: this.surname,
      letters: this.letters,
      numbers: this.numbers,
      id: this.id

    }

    this.amendNumberplate.emit(numberplate);
  }
}
