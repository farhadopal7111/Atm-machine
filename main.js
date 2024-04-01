#! /usr/bin/envnode
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "balance inquiry", "fastCash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is " + myBalance);
        }
        else
            console.log(" insufficient balance");
    }
    else if (operationAns.operation === "fastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "choose the amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log("your remaining balance is " + myBalance);
    }
    else if (operationAns.operation === "balance inquiry") {
        console.log(" your remaining balnce is " + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
