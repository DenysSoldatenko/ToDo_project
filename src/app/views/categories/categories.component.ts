import {AfterViewInit, Component, OnInit} from '@angular/core';
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
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category | undefined;

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {
    this.dataHandlerService.getAllCategories().subscribe(category => this.categories = category);
  }

  showTasksByCategory(category: Category) {

  }
}
