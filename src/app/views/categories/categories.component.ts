import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {NgForOf} from "@angular/common";
import {DataHandlerService} from "../../services/data-handler.service";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input()
  categories: Category[] = [];
  selectedCategory: Category | undefined;

  showTasksByCategory(category: Category) {

  }
}
