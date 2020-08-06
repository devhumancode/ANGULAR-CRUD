import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NumberPlate } from '../../models/model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  set data(data: NumberPlate[]) {
    this.dataSource = new MatTableDataSource<NumberPlate>(data);
  }

  @Output() edit = new EventEmitter<NumberPlate>();
  @Output() delete = new EventEmitter<NumberPlate>();

  public dataSource: MatTableDataSource<NumberPlate>;
  public displayedColumns: string[] = ['name', 'surname', 'number', 'edit', 'delete'];

}
