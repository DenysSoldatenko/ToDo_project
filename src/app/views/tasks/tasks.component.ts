import {Component} from '@angular/core';
import {Task} from "../../models/Task";
import {DataHandlerService} from "../../services/data-handler.service";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
