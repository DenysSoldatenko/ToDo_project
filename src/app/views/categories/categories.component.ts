import {Component} from '@angular/core';
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

}
