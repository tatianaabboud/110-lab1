import { GameState, Recipe, ShoppingOrder } from "./types";


export const state: GameState = {
    day: 1,
    money: 2.00,
    cups: 0,
    ice: 0,
    lemons: 0,
    sugar: 0,
};

export const PRICES = { cups: 0.05, ice: 0.02, lemons: 0.30, sugar: 0.25};

export const RECIPE: Recipe = {
    cups: 1,
    ice: 2,
    lemons: 1,
    sugar: 1,
    cost: 0.64
}

export function calculateOrderCost(order: ShoppingOrder): number {
    const lemonstCost = order.lemons * PRICES.lemons;
    const sugarCost = order.sugar * PRICES.sugar;
    const iceCost = order.ice * PRICES.ice;
    const cupsCost = order.cups * PRICES.cups;

    return lemonstCost + sugarCost + iceCost + cupsCost;
}

export function buyIngredients(state: GameState, order: ShoppingOrder): boolean {
    const totalCost = calculateOrderCost(order)
    if (state.money < totalCost) {
        return false;   // not enough money to make the purchase
    }

    // otherwise the user has enough money to purchase the order
    state.money -= totalCost;
    state.lemons += order.lemons;
    state.cups += order.cups;
    state.ice += order.ice;
    state.sugar += order.sugar;

    return true;    // successful purchase
}

