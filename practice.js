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

// LocalStorage
localStorage.setItem("Kalyan's girl", "Nivedita")
console.log(localStorage.getItem("Kalyan's girl")) // Nivedita
localStorage.clear() 
console.log(localStorage.getItem("Kalyan's girl")) // null

//Hints: 
// Both key and value need to be strings only.
// That means localStorage 

//JSON.stringify(), JSON.parse() => both of these are used in case of localStorage operations
let myLeads = `["google.com"]`
console.log(typeof myLeads)
myLeads = JSON.parse(myLeads)
myLeads.push("fb.com")
console.log(myLeads)
myLeads = JSON.stringify(myLeads)
console.log(myLeads)

// Truthy && Falsy values
// false, 0, "", null, undefined, NaN => falsy values.3

