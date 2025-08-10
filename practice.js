let boxEl = document.getElementById("box-el")
boxEl.addEventListener("click", function(){
    console.log("I want to open the box")
}) 

const btnEl = document.getElementById("btn-container")

btnEl.innerHTML = "<button onclick= 'buy()'>Buy!</button>"
function buy(){
    btnEl.innerHTML += "<p>Thanks for buying</p>"
}

const recipient = "Kalyan"
const email = `Hey ${recipient} 
How is it going? 
Cheers! ${recipient}`
console.log(email)