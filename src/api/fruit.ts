import { Fruit } from "../@types/fruit";
import api from "../configs/api";

export const SearchFruitAPI = (name: string) => {
  return api.get<Fruit>(`/fruits/${name}`);
};
