export type Nutrition = {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  sugar: number;
};

export type Fruit = {
  id: number;
  name: string;
  genus: string;
  family: string;
  order: string;
  nutritions: Nutrition;
};
