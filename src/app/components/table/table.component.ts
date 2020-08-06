import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NumberPlate } from '../../models/model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  set data(data: NumberPlate[]) {
    this.dataSource = new MatTableDataSource<NumberPlate>(
      data.sort((a, b) => a.name.localeCompare(b.name))
      );
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Output() edit = new EventEmitter<NumberPlate>();
  @Output() delete = new EventEmitter<NumberPlate>();
  public dataSource: MatTableDataSource<NumberPlate>;
  public displayedColumns: string[] = ['name', 'surname', 'number', 'options'];

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
