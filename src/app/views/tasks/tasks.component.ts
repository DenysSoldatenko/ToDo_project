import {Component} from '@angular/core';
import {Task} from "../../models/Task";
import {DataHandlerService} from "../../services/data-handler.service";
import {DatePipe, NgClass, NgForOf} from "@angular/common";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";

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
    NgClass
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  protected tasks: Task[] = [];
  protected displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  protected dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  private readonly COMPLETED_TASK_COLOR = '#F8F9FA';
  private readonly DEFAULT_PRIORITY_COLOR = '#fff';

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);
    this.refreshTable();
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

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
