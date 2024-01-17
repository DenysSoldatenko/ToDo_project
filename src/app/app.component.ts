import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CategoriesComponent} from "./views/categories/categories.component";
import {NgForOf} from "@angular/common";
import {TasksComponent} from "./views/tasks/tasks.component";
import {DataHandlerService} from "./services/data-handler.service";
import {Task} from './models/Task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, NgForOf, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ToDoProject';
  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }
}
