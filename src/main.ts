import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    const rl = readline.createInterface({ input, output });

    console.log("Hello, world!");
    console.log("Welcome to your Lemonade Stand simulation!");
    const cups: string = await rl.question("How many cups of lemonade would you like to make? ");
    console.log(`Let's make ${cups} cups of lemonade!`)

    rl.close()
}

main();