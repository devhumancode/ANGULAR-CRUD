import { Component, OnInit } from '@angular/core';
import { Numberplate } from '../models/Numberplate';
import { NumberplatesService } from '../services/numberplates.service'
@Component({
  selector: 'app-numberplate',
  templateUrl: './numberplate.component.html',
  styleUrls: ['./numberplate.component.scss']
})
export class NumberplateComponent implements OnInit {
  numberplates:Numberplate[];
  editnumberplate:Numberplate;

  constructor(private numberplateService:NumberplatesService) { }

  ngOnInit() {
    this.numberplateService.getNumberplates().subscribe(numberplates => {
      this.numberplates = numberplates;
    });
  }

  //Deletes existing numberplate
  deleteNumberplate(numberplate:Numberplate) {
    //Remove from UI
    this.numberplates = this.numberplates.filter(t => t.id !== numberplate.id);
    //Remove from Server
    this.numberplateService.deleteNumberplate(numberplate).subscribe();
  }

  editToggle(numberplate:Numberplate){
    this.editnumberplate = numberplate;
  }

  //Creates new numberplate
  addNumberplate(numberplate:Numberplate) {
    this.numberplateService.addNumberplate(numberplate).subscribe(numberplate => {
      this.numberplates.push(numberplate);
    });
  }

  //Amends information of an existing numberplate
  amendNumberplate(numberplate:Numberplate) {
    this.numberplateService.amendNumberplate(numberplate).subscribe(
    );
  }

}
