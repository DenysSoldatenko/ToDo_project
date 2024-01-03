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

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.categories = this.dataHandlerService.getCategories();
  }

  showTasksByCategory(category: Category) {
    this.dataHandlerService.getTasksByCategory(category);
  }
}
