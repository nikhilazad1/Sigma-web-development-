let a = prompt("Enter first number")
let b = prompt("Enter second number")
let sum = parseInt(a) + parseInt(b)
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("soryy this is not allowed")
}

function main(){
let x = 2;
try {
    console.log("The num is", sum*x)
    return true
} catch (error) {
    console.log("error aa gya bhai")
    return false    
}

finally{
    console.log("files are being closed and db are being are being closed")
}
}
let c = main()