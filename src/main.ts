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
    
    rl.close()
}

main();
