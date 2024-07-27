const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


// DOM 
let firstPassEl = document.getElementById("firstPass-el")
let secondPassEl = document.getElementById("secondPass-el")

console.log(firstPassEl)
console.log(secondPassEl)



function showPassword() {
    let firstPass = generatePassword()
    let secondPass = generatePassword()

    firstPassEl.innerText = firstPass
    secondPassEl.innerHTML = secondPass
}

function generatePassword() {
    console.log("Generating password...")
    let passwordLength = 15
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * characters.length)
        let char = characters[number]
        password += char
    }
    console.log(password)
    return password
}


function randomNumber() {


}


