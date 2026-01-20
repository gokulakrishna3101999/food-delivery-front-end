import { FoodItem } from './foodItem';
import { Restaurant } from './restaurant';

export interface FoodCatalogue {
    restaurant?: Restaurant;
    foodItemList?: FoodItem[];
}