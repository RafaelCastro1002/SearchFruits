import { Fruit } from "../@types/fruit";
import { SearchFruitAPI } from "../api/fruit";

export default class FruitService {
  async search(fruitName: string) {
    let fruit: Fruit | null = null;

    try {
      const response = await SearchFruitAPI(fruitName);

      fruit = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      return fruit;
    }
  }
}
