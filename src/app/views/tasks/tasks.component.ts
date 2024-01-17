import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../models/Task";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatRow,
    MatHeaderRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    NgClass,
    MatPaginator,
    NgIf,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  private readonly COMPLETED_TASK_COLOR = '#F8F9FA';
  private readonly DEFAULT_PRIORITY_COLOR = '#fff';

  @Input()
  tasks: Task[] = [];
  protected displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  protected dataSource: MatTableDataSource<Task> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator | null = null;
  @ViewChild(MatSort, {static: false}) private sort: MatSort | null = null;

  ngOnInit() {
    this.fillTable();
  }

  protected getPriorityColor(task: Task): string {
    if (task.completed) {
      return this.COMPLETED_TASK_COLOR;
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return this.DEFAULT_PRIORITY_COLOR;
  }

  private fillTable() {
    this.dataSource.data = this.tasks;
    this.addTableObjects();
    this.configureSortingDataAccessor();
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private configureSortingDataAccessor() {
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }
        case 'category': {
          return task.category ? task.category.title : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }
        case 'title': {
          return task.title;
        }
      }
    };
  }
}
