import { FoodItem } from "src/app/shared/models/foodItem";
import { Restaurant } from "src/app/shared/models/restaurant";

export interface Order {
    foodItemList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}