import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CategoriesComponent} from "./views/categories/categories.component";
import {NgForOf} from "@angular/common";
import {TasksComponent} from "./views/tasks/tasks.component";
import {DataHandlerService} from "./services/data-handler.service";
import {Task} from './models/Task';
import {Category} from "./models/Category";
import {EditTaskDialogComponent} from "./dialog/edit-task-dialog/edit-task-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, NgForOf, TasksComponent, EditTaskDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ToDoProject';
  tasks: Task[] = [];
  categories: Category[] = [];
  selectedCategory: Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(category => this.categories = category);
  }

  protected onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.searchTasks(
      this.selectedCategory, null, null, null
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  protected onUpdateTask(task: Task) {
    this.dataHandler.updateTask(task).subscribe(() => {
    });
  }
}
