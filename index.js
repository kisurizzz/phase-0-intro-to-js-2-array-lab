// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat =(name) => cats.push('Ralph')

let destructivelyPrependCat = (name) => cats.unshift("Bob")

let destructivelyRemoveLastCat = (name) => cats.pop()

let destructivelyRemoveFirstCat = (name) => cats.shift()

let appendCat = (name) =>{
    const catsCopy = [...cats]
    catsCopy.push("Broom")
    return catsCopy //spread operator
}

let prependCat = (name) => {
    const catsCopy = [...cats]
    catsCopy.unshift("Arnold")
    return catsCopy
}
let removeLastCat = (name) => {
    const catsCopy = [...cats]
    catsCopy.pop()
    return catsCopy
}

let removeFirstCat = (name) => {
    const catsCopy = [...cats]
    catsCopy.shift()
    return catsCopy
}