import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../models/Category";
import {NgForOf} from "@angular/common";

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

  @Output()
  selectCategory = new EventEmitter<Category>();
  selectedCategory: Category | undefined;

  showTasksByCategory(category: Category): void {
    if (this.selectedCategory !== category) {
      this.selectedCategory = category;
      this.selectCategory.emit(category);
    }
  }
}
