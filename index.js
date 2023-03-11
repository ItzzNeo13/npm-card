#!/usr/bin/env node

// Importing packages:
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// Loading data effect:
let user;

const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const initTerminal = chalkAnimation.glitch(
        `\n
         \t Loading Data...\n`
    );

    await sleep();
    initTerminal.stop();
}

// Main Card:
function mainCard() {
    console.clear();

    // Intro

    console.log(
        chalk.red(`\n
 \t                                   _                     
 \t                                 _|_ _  _  __ |  _  _  _ 
 \t                                  | (/_(_| |  | (/__> _> 
        \n`)
    );
    console.log(
        chalk.green('\n \t \t \t \t \t Hello,') + ' I am ' + chalk.cyan.bold('ItzzNeo13!')
    );

    // Links:
    console.log(
        chalk.yellow.italic('\n \t \t \t \t \t Find more about me here:\n'),
        chalk.grey('\n \t \t \t \t  GitHub: https://github.com/' + chalk.bold('ItzzNeo13'))
    ),

    console.log(
        chalk.blue('\n \t \t \t \t  Twitter: https://twitter.com/' + chalk.bold('ItzzNeo13'))
    ),

    console.log(
        chalk.white('\n \t \t \t \t  LinkedIn: https://linkedin.com/' + chalk.bold('ItzzNeo13'))
    )

    console.log(
        chalk.cyan('\n \t \t \t \t  Website: https://itzzneo13.netlify.app/')
    )

    console.log(
        chalk.dim('\n \t \t \t - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
    )

    console.log(
        chalk.blueBright('\n \t \t \t \t \tMail me: itzzneo13@proton.me')
    )

    console.log(
        chalk.yellowBright('\n \t \tCheck out my other projects: https://github.com/ItzzNeo13?tab=repositories')
    )

    console.log(
        chalk.white.italic('\n \t \t \t \tThank you for checking this side project out!!')
    )

    console.log(
        chalk.dim('\n \t \t \t - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
    )
      process.exit(0);
    };


// Calling functions

await welcome();
await mainCard();