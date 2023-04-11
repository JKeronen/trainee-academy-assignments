import readline from "readline-sync";
import fs from "fs";

const commandsHandler = (command,bot) => {
    switch (command) {
        case "help":
            readInfo();
            break;
        case "hello":
            botSayHello();
            break;
        case "botInfo":
            commandLog(bot.botInfo);
            break;
        case "botName":
            console.log(`My name is currently ${bot.botName}. If you want to change it, type botRename.`)
            break;
        case "botRename":
            botRename(bot);
            break;
        case "forecast":
            showForecast(bot.forecast);
            break;
        case "quit":
            break;
        default: 
            console.log(`Command ${command} is not in use.`);
    }
}

const botSayHello = () => {
    const answer = readline.question("What is your name?: ");
    console.log(`Hello there, ${answer}!`);
}

const commandLog = (commands) => {
    commands.map(function(element, index){ 
        console.log(`${element} -> counter = ${index}`);
     });
}

const botRename = (bot) => {
    const answer = readline.question("Type my new name, please: ");
    const nameEnsure= readline.question(`Are you happy with the name ${answer}? (Yes/No) `);
    if(nameEnsure === "Yes") {
        bot.botName = answer;
        console.log(`I was renamed to  ${answer}`);
    } else {
        console.log(`Name not changed. My name is ${bot.botName}.`);
    }
}

const showForecast = (forecast) => {
    console.log(`Tomorrows weather will be....`);
    Object.entries(forecast).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}

const readInfo = () => {
    const data = fs.readFileSync("info.txt", "utf8");
    console.log(data);
}

export {commandsHandler as default};