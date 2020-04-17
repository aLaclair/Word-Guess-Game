const words = ['murder', 'blood', 'knife', 'haunt', 'death']
let wins = 0
let guessesRemaining = 10
let guessedLetters
let answer = ''
let underscoreLength = []
let wrongGuess = []
let rightGuess = []

// picks a random word from the words array
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer)
}

//generates underscores based on length of the variable answer
let underscores = () => {
    for(let i = 0; i < answer.length; i++) {
        underscoreLength.push('_')
    }
    return underscoreLength;
}

//displaying guessed letters
    var letterGuessed = document.addEventListener('keypress', function(event) {
        if (letterGuessed = answer.includes(event.key.toLowerCase())) {         //if key pressed is correct, it will be added to the string. If not it will be pushed to the wrong guess array
            for (j = 0; j < answer.length; j++) {
                answer[j] == event.key
            }
            console.log('cool')
        }
        else {
            if (wrongGuess.includes(event.key)) []
            else {
                wrongGuess.push(event.key.toLowerCase())
                guessesRemaining--; //if key pressed is incorrect and isn't a part of the array already, it will be displayed and guesses remaining will decrease by 1
            }
        }
        document.getElementById('guessedLettersValue').innerHTML = wrongGuess;
        document.getElementById('guessValue').innerHTML = guessesRemaining;
    })
        
//calling functions and displaying stats
document.getElementById('winsValue').innerHTML = wins;
randomWord();
underscores();
document.getElementById('word').innerHTML = underscoreLength.join(' ');


