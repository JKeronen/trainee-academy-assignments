# trainee-academy-assignments

## Assignment #1: Chatbot

In command prompt navigate the right folder and type "npm install" to install the app and "node exercise3.js" to use it.

### The assignment

Create a chatbot commandline application with following orderlist:

```
-----------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
-----------------------------

```

1. use readline-sync package to input commands
2. When user writes the command, acts chatbot accordingly
    - If the user writes "hello" in to the command line, you should open a dialog that asks the users name and after that say hello to user with given name. 
    - Command "botInfo" gives the list of all used commands, even they are incorrect
    - "botName" shows it's name
    - You can chance bot name using command "botRename" 
    - "forecast" gives a random weather, it's not a realistic forecast!!
    - Type "quit" to end the application 

### Initial thoughts

Idea for a short main program came quickly. Each command needs own component and some system to command them. All bot data should be store to object instead of many variables.

I created an object for data collecting and creating information. Info message was chosen between file and text variable and I chose file. Action in main component is to ask commands from user and store them. Commands will send to another component.

Component botCommander will handle the commands using the bot data.  

### Solution

#### 1) main app
```javascript
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
```
This object includes all data is needed. botInfo- array collects user's used commands. Weather information is created by Math.random- function.

```javascript
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
```
In while-loop is commnd line reading and sending to command handling component. Typing "quit" will result to program end. All used command is pushed to array.


#### 2) Handling commands

```javascript
const commandsHandler = (command,bot) => {
    switch (command) {
        case "help":
            readInfo();
            break;
```
All available commands have own function and unfit command is rejected as default case.

```javascript
const commandLog = (commands) => {
    commands.map(function(element, index){ 
        console.log(`${element} -> counter = ${index}`);
     });
}
```
Components like *commandLog* is called from switch case and it uses array, which is stored given commands. 

```javascript
const showForecast = (forecast) => {
    console.log(`Tomorrows weather will be....`);
    Object.entries(forecast).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}
```
Forecast- component uses forecast- object ja each of it's value will be printed to console.

#### 3) Chatbot info file

```javascript
const readInfo = () => {
    const data = fs.readFileSync("info.txt", "utf8");
    console.log(data);
}
```

Commands handler uses file named info.txt to get chatbot information. Module *fs* have function *readFileSync* and gives the promise. File format is supposed to be *utf8*. 
