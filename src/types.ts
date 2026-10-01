export interface GameState {
    day: number;
    money: number;
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;
}

export interface Recipe {
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;   
    cost: number; 
}

export interface ShoppingOrder {
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;
}

export type WeatherCondition = 'hot' | 'sunny' | 'cloudy';
