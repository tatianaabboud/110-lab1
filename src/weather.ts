import { GameState } from "./types";
import { RECIPE } from "./game";

const Weather = ["rainy", "cloudy", "sunny", "hot"];
const Price_per_cup = 1.00;

export function getWeather(): string {
    return Weather[Math.floor(Math.random() * Weather.length)];
}


export function getCustomers(weather: string): number {
    const extra = Math.floor(Math.random() * 3)
    if (weather == "hot") return 12 + extra
    if (weather == "sunny") return 8 + extra
    if (weather == "cloudy") return 4 + extra
    return 1 + extra // if its rainy 
}

function hasIngredients(state: GameState): boolean {
    return state.cups >= RECIPE.cups && state.ice >= RECIPE.ice && state.lemons >= RECIPE.lemons && state.sugar >= RECIPE.sugar;
}

export function sellLemonade(state: GameState, goal: number, weather: string): number {
    const customers = getCustomers(weather);
    let sold = 0;
    
    while (sold < goal && sold < customers && hasIngredients(state)){
        state.cups -= RECIPE.cups;
        state.ice -= RECIPE.ice;
        state.lemons -= RECIPE.lemons;
        state.sugar -= RECIPE.sugar;
        state.money += Price_per_cup;
        sold++;
    }
    return sold;

}

