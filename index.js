#! /usr/bin/env node
import inquirer from "inquirer";
let Currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.68,
    INR: 83.30,
    PKR: 277.54,
    NZD: 1.68,
    NPR: 133.08,
    IRR: 42075.00,
    AFN: 71.23,
    MAD: 10.06,
    IQD: 1308.17,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: ('Enter Your Currency Which You Want To Convert'),
        type: 'list',
        choices: ['USD', 'ERU', 'GBP', 'INR', 'PKR', 'NZD', 'NPR', 'IRR', 'AFN', 'MAD', 'IQD']
    },
    {
        name: 'to',
        message: ('Enter Your Currency '),
        type: 'list',
        choices: ['USD', 'ERU', 'GBP', 'INR', 'PKR', 'NZD', 'NPR', 'IRR', 'AFN', 'MAD', 'IQD']
    },
    {
        name: 'amount',
        message: 'Enter Your Currency How Much You Want',
        type: 'number',
    }
]);
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log(convertedAmount);
