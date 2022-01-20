// Write your solution below this line:

console.log("== Nested ==")

for (let i = 1; i < 51; i++) {
    
    if (i%3 === 0){
        if (i%5 === 0) {
            console.log("fizzbuzz")
        } else {
            console.log("fizz")
        }
    } else if (i%5 === 5) {
        console.log("buzz")
    }
}

console.log("== Inline ==")

for (let i = 1; i < 51; i++) {

    if (i%3 === 0 && i%5 === 0){
        console.log("fizzbuzz")
    } else if (i%3 === 0) {
        console.log("fizz")
    } else if (i%5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}

console.log("== Inline w/ Bool ==")

for (let i = 1; i < 51; i++) {

    let isDivBy3 = i%3 === 0
    let isDivBy5 = i%5 === 0
    
    if (isDivBy3 && isDivBy5){
        console.log("fizzbuzz")
    } else if (isDivBy3) {
        console.log("fizz")
    } else if (isDivBy5) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}