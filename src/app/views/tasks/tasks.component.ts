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

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);
    this.refreshTable();
  }

  getPriorityColor(task: Task) {
    return task.priority?.color ?? '#fff';
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
