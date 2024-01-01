import { Injectable } from '@angular/core';
import {Category} from "../models/Category";
import {TestData} from "../dataGeneration/TestData";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[]{
    return TestData.categories;
  }
}
