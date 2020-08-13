import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NumberPlate } from '../../models/model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  set data(data: NumberPlate[]) {
    if (data){
    this.dataSource = new MatTableDataSource<NumberPlate>(
      data.sort((a, b) => a.name.localeCompare(b.name))
    );
    // Connecting table data to paginator
    this.dataSource.paginator = this.paginator;
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() edit = new EventEmitter<NumberPlate>();
  @Output() delete = new EventEmitter<NumberPlate>();
  public dataSource: MatTableDataSource<NumberPlate>;
  public displayedColumns: string[] = ['name', 'surname', 'number', 'options'];


  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
