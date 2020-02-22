export interface Drink {
  strDrinkThumb: string;
  strDrink: string;
}

export interface Drinks {
  drinks: Drink[];
}

export interface Category {
  categoryName: {
    strCategory: string,
    selected: boolean
  };
}

export interface Categories {
  drinks: any;
  categoryName: Category;
}

export interface CategoriesList {
  categoryName: {
    strCategory: string,
    selected: boolean
  };
  items: Drink[];
}
