import Hangman from './hangman'
import getPuzzle, { randomWord } from './requests'



const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    let wordCount = randomWord()
    const puzzel = await getPuzzle(wordCount)
    game1 = new Hangman(puzzel, 10)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
