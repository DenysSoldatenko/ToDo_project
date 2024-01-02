import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoriesComponent} from "./views/categories/categories.component";
import {NgForOf} from "@angular/common";
import {TasksComponent} from "./views/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, NgForOf, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoProject';
}
