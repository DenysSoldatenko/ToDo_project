import {Component} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
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

  categories: Category[] = [];
  selectedCategory: Category | undefined;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.categorySubject.subscribe(category => this.categories = category);
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandlerService.fillTasksByCategory(category);
  }
}
