import { Injectable } from '@angular/core';
import {Categories, CategoriesList, Category, Drinks} from './interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  public listDrinks = `${this.baseUrl}list.php?c=list`;

  categories: Category[] = [];

  categoriesList: CategoriesList[] = [];

  constructor(private http: HttpClient) { }

  getCategoriesList() {
    this.http.get<Categories>(this.listDrinks)
      .subscribe(items => {
        items.drinks.forEach(item => {
          const category: Category = {
            categoryName: {
              strCategory: item.strCategory,
              selected: true
            }
          };
          this.categories.push(category);
        });
        this.getCategoriesItems();
      });
  }

  getCategoriesItems() {
    this.categories.forEach(item => {
      this.categoriesList.length = 0;
      if (item.categoryName.selected === true) {
        item.categoryName.strCategory.toString().split('_').join(' ');
        this.http.get<Drinks>(`${this.baseUrl}filter.php?c=${item.categoryName.strCategory}`)
          .subscribe(items => {
            const temporaryCategory: CategoriesList = {
              categoryName: {
                strCategory: item.categoryName.strCategory,
                selected: item.categoryName.selected
              },
              items: items.drinks
            };
            temporaryCategory.categoryName.strCategory = temporaryCategory.categoryName.strCategory.toString().split('_').join(' ');
            this.categoriesList.push(temporaryCategory);
          });
      }
    });
  }
}
