// # Rock, Paper, Scissors
//
// You tried in the JavaScript workshop, but you were missing one crucial element: *callbacks*.
//
// Take a look at this:
//
// ```js
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question(`sup? \n`, (res) => {
//   console.log(`you replied: ${res}`)
// });
// ```
//
// `readline` is what's known as a *library*. Don't worry about what that is, precisely, yet - just know that, like class methods, it's something that Node makes available to us to use how we'd like.
//
// You can see here that we're using callbacks to *await a user's response*. The first argument of `question` prints to the console to ask a question, and the second is a callback which handles what our user might say. Once we have that response, our callback fires and we tell them what they wrote.
//
// Using this library, we are going to make a rock, paper, scissors game against the computer. Our finished product should converse something like this:
//
// ```
// Console: `Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice.`
// User: `rock`
// Console: `You chose 'rock'. Hmm...` (setTimeout for 5 seconds here to imagine the computer thinking)
// Console: `The computer chose 'scissors'.`
// Console: `Congratulations! You win!`
// ```
//
// ...And then the program exits:
//
//

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question('Welcome to rock, paper, scissors. Please type rock, paper, or scissors to make a choice. \n', (response) => {
    let userChoice = response
    let choices = ['rock', 'paper', 'scissors']
    console.log(`You chose ${userChoice}. Hmmm.... `)
    setTimeout(() => {
        let computerChoice = choices[Math.floor(Math.random()*choices.length)]
        console.log(`The computer chose ${computerChoice}`)
        if(userChoice === computerChoice){
            console.log('Its a tie! Get a life!!!')
        }
        else if(userChoice === 'rock' && computerChoice === 'paper'){
            console.log('You lose!!!!! Get a life!!!')
        }
        else if(userChoice === 'rock' && computerChoice === 'scissors'){
            console.log('Youre a winner!!! Get a life!!!')
        }
        else if(userChoice === 'paper' && computerChoice === 'rock'){
            console.log('Youre a winner!!! Get a life!!!')
        }
        else if(userChoice === 'paper' && computerChoice === 'scissors'){
            console.log('Youre a loser!!! Get a life!!!')
        }
        else if(userChoice === 'scissors' && computerChoice === 'rock'){
            console.log('Youre a loser!!! Get a life!!!')
        }
        else if(userChoice === 'scissors' && computerChoice === 'paper'){
            console.log('Youre a winner!!! Get a life!!!')
        }
        else {
            console.log('Dont you know how to play rock paer scissors???')
        }
        reader.close()
    }, 5000)
});
