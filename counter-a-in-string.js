function verifyAInString(text) {
    let counter = 0
    text.toLowerCase().split('').forEach(char => {
        if(char === 'a') {counter++}
    })
    return counter
}

const text = "Quantas letras a esse texto possui?"
console.log(`A quantidade de letras 'a' no texto "${text}" é: ${verifyAInString(text)}`);
