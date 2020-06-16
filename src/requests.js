const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// randWords
 
const randomWord = () => {
    let min = 1
    let max = 10
    const  randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
}

export { randomWord, getPuzzle as default }