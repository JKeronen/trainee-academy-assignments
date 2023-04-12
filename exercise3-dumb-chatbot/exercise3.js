import readline from "readline-sync";
import commandsHandler from "./botCommander.js";

const bot = {
    botName: "Jan",
    botInfo: [],
    forecast: {
        temperature: Math.round(Math.random()*50)-25, // -25 - +25
        cloudy: Math.random() < 0.5, //true or false
        sunny: Math.random() < 0.5,
        wind: Math.round(Math.random()*200)/10 // 0.0 - 20.0
    }
}

console.log("Hi! I am a dumb chat bot. You can check all the things I can do by typing 'help'.");

while(true) {
    const answer = readline.question("Give me an answer: ");
        if(answer === "quit") {
            console.log("Bye!");
            break;
        } else {
            bot.botInfo.push(answer); // collect all used commands
            commandsHandler(answer,bot);
        }
};
