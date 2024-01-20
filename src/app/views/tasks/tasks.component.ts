import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
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
import {EditTaskDialogComponent} from "../../dialog/edit-task-dialog/edit-task-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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

  protected displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  protected dataSource: MatTableDataSource<Task> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator | null = null;
  @ViewChild(MatSort, {static: false}) private sort: MatSort | null = null;
  private dialog: MatDialog | null = null;
  protected tasks: Task[] = [];

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.dialog = this.injector.get(MatDialog);
    this.fillTable();
  }

  @Input('tasks')
  set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  @Output()
  selectTask = new EventEmitter<Task>();

  protected openEditTaskDialog(task: Task): void {
    if (this.dialog) {
      const dialogReference = this.dialog.open(
        EditTaskDialogComponent, {data: [task, 'Edit task'], autoFocus: false}
      );

      dialogReference.afterClosed().subscribe(result => {

      });
    } else {
      console.error("`this.dialog` is not available. Unable to open edit dialog!");
    }
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

  private fillTable(): void {
    this.dataSource.data = this.tasks;
    this.addTableObjects();
    this.configureSortingDataAccessor();
  }

  private addTableObjects(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private configureSortingDataAccessor(): void {
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
