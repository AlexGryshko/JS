//1
let firstName = "Lena"
let lastName = "Golovach"
let fullName = lastName + " " + firstName
console.log(fullName)

//2
let width = 89.5
let height = 37.48
let per = width * height
console.log(per)

//3
console.log(Math.pow(10, 6))

//4
console.log(Math.floor(Math.random() * 50))

//5
let number = -984
if (number < 0) {
    console.log("negative value")
}
else {
    console.log("positive value")
}
    
//6
let text = "afsdkrj"
if (text.length > 1) {
    console.log(text[text.length - 2])
}

//7
let Number = 10
switch (Number) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("mounth not found")
}

//8
let password = "pi&zda"
if ( password.length > 5 && password.indexOf("\&") !==-1) {
    console.log("this password is strong")
}
else {
    console.log("this password is weak")
}

//9
let a = 345
let b = 567
if (typeof a === "number" && typeof b === "number") {
    console.log(a+b)
}
else {
    console.log("Sum of those items can’t be counted")
}

//10
let textOne = "dfljkg"
let textTwo = "dfjlgnladnfg"
if (typeof textOne === "string" && typeof textTwo === "string" && textOne.length === textTwo.length) {
    console.log("those items are strings and they’re equal")
}
else {
    console.log("items are not compareble")
}