import fs from "fs/promises"

let a = await fs.readFile("nikhil.txt")

let b = await fs.appendFile("nikhil.txt", "\n\n\n\nthis is amazing promise")

console.log(a.toString())