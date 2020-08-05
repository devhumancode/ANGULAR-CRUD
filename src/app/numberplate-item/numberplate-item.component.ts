import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Numberplate } from '../models/Numberplate';
import { NumberplatesService } from '../services/numberplates.service';

@Component({
  selector: 'app-numberplate-item',
  templateUrl: './numberplate-item.component.html',
  styleUrls: ['./numberplate-item.component.scss']
})
export class NumberplateItemComponent implements OnInit {
  @Input() numberplate: Numberplate;
  @Output() deleteNumberplate: EventEmitter<Numberplate> = new EventEmitter();
  @Output() editToggle: EventEmitter<Numberplate> = new EventEmitter();
  @Output() addNumberplate: EventEmitter<any> = new EventEmitter
  name:string;
  surname:string;
  letters:string;
  numbers:number;
  id: number;

  constructor(private numberplatesService:NumberplatesService) { }

  ngOnInit(): void {
  }

  //On Delete Click
  onDelete(numberplate) {
    this.deleteNumberplate.emit(numberplate);
  }

  //On Edit Click
  onEdit(numberplate) {
    this.editToggle.emit(numberplate);
  }
  
  onSubmit (numberplate) {
    numberplate.name = this.name;
    numberplate.surname = this.surname;
    numberplate.letters = this.letters;
    numberplate.numbers = this.numbers;

    this.numberplatesService.changeDetails(numberplate).subscribe();
  }

  openModal(id) {
    document.getElementsByClassName("modal" + id)[0].classList.add("active");
  }
  //OnEdit
  // onEdit(numberplate) {
  //   //UI
  //   numberplate.name = "petras";
  //   //SERVER
  //   this.numberplatesService.changeDetails(numberplate).subscribe();
  // }
}
