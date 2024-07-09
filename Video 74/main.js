
const fs = require("fs")

console.log("starting")

// fs.writeFileSync("nikhil.txt", "nikhil is a good boy")

fs.writeFile("nikhil2.txt", "nikhil is a very good boy", ()=>{
    console.log("done")
    fs.readFile("nikhil2.txt", (error, data)=>{
        console.log(error, data.toString())
    })

})
 
fs.appendFile("nikhil.txt", "nikhilroy", (e,d)=>{
    console.log(d)
})
console.log("ending")