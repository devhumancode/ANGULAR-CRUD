import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-numberplate',
  templateUrl: './add-numberplate.component.html',
  styleUrls: ['./add-numberplate.component.scss']
})
export class AddNumberplateComponent implements OnInit {
  @Output() addNumberplate: EventEmitter<any> = new EventEmitter
  name:string;
  surname:string;
  letters:string;
  numbers:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit () {
    const numberplate = {
      name: this.name,
      surname: this.surname,
      letters: this.letters,
      numbers: this.numbers

    }

    this.addNumberplate.emit(numberplate);
  }

}
