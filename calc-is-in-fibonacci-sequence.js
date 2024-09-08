function calcIsInFibonacciSequence(number) {
    let fibonacciVector = [0, 1]

    if(number === 0 || number === 1) return true
    while(fibonacciVector[fibonacciVector.length-1] < number) {
        const numberToAdd = fibonacciVector[fibonacciVector.length-1] + fibonacciVector[fibonacciVector.length-2]
        fibonacciVector.push(numberToAdd)
    }

    if(number === fibonacciVector[fibonacciVector.length-1]) return true

    return false
}

const number = 13
console.log(calcIsInFibonacciSequence(number) ? "O número PERTENCE a sequência de Fibonacci" : "O número NÃO pertence a sequência de Fibonacci!");
