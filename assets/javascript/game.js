const words = ['murder', 'blood', 'knife', 'haunt', 'death']
let wins = 0
let guessesRemaining = 10
let guessedLetters
let asnwer = ''
let underscoreLength = []
let wrongGuess = []

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

    var letterGuessed = document.addEventListener('keydown', function(event) {
        if (letterGuessed = answer.includes(event.key)) {
            
        }
        else {
            
            if (wrongGuess.includes(letterGuessed)) [
                
            ]
            else {
                wrongGuess.push(event.key)
            }

        }
        document.getElementById('guessedLettersValue').innerHTML = wrongGuess;
    })
 

document.getElementById('guessValue').innerHTML = guessesRemaining;
document.getElementById('winsValue').innerHTML = wins;
randomWord();
underscores();
document.getElementById('word').innerHTML = underscoreLength.join(' ');


