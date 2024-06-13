let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>yah you were clicked</b>Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("don't hack us by right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e)
})
