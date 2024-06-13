async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve()
        }, 2000);
    })
}

async function main() {
    console.log("Initializing Hacking...")
   
    console.log("Reading Your Files...")
    
    console.log("Password Files Dectected...")
    let data = await getData()
    console.log("Sending all password and personal files to server...")
    console.log("Cleaning up...")

}
main()

data.then((v) => {
    console.log("Password Files Dectected...")
    console.log("Sending all password and personal files to server...")
    console.log("Cleaning up...")

})