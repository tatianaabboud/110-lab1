import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    const rl = readline.createInterface({ input, output });

    console.log("Welcome to your Lemonade Stand simulation!");
    console.log(`You have $${state.money.toFixed(2)}.`);
    console.log("Today's ingredient prices:");
    console.log(`  Cups:   $${PRICES.cups.toFixed(2)} each`);
    console.log(`  Ice:    $${PRICES.ice.toFixed(2)} each`);
    console.log(`  Lemons: $${PRICES.lemons.toFixed(2)} each`);
    console.log(`  Sugar:  $${PRICES.sugar.toFixed(2)} each`);
    console.log();

    const order: ShoppingOrder = {
        cups: await askQuantity(rl, "cups", PRICES.cups),
        ice: await askQuantity(rl, "ice", PRICES.ice),
        lemons: await askQuantity(rl, "lemons", PRICES.lemons),
        sugar: await askQuantity(rl, "sugar", PRICES.sugar),
    };

    const totalCost = calculateOrderCost(order);
    console.log(`\nThat order will cost $${totalCost.toFixed(2)}.`);

    const success = buyIngredients(state, order);
    if (success) {
        console.log(`Purchase successful! You have $${state.money.toFixed(2)} left.`);
        console.log(`With your ingredients, you can make ${maxCupsPossible(state)} cup(s) of lemonade.`);
    } else {
        console.log(`Sorry, you don't have enough money for that order.`);
    }
    
    rl.close()
}



main();
