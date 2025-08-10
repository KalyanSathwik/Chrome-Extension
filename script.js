const inputEl = document.getElementById("input-el")
let myLeads = []
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

function save(){
    console.log("Button Clicked by onclick\n")
}
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

inputbtn.addEventListener("click", function() {
    // console.log("Button clicked by eventlistener")
    // myLeads = JSON.parse(myLeads)
    myLeads.push(inputEl.value)
    // Method 1
    // ulEl.innerHTML += "<li>" + inputLead + "</li>"
    // Method 2
    // 1. Create an Element
    // 2. Set text content
    // 3. Append to the ul
    // const li = document.createElement("li")
    // li.textContent = inputLead
    // ulEl.append(li)

    // Using the localStorage : 
    
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))
    renderLeads()
    inputEl.value = ""

})

function renderLeads()
{
let listItems = "" 
for(let i=0; i < myLeads.length; i++){
    // This is too complicated and difficult to understand. So we try to use "template strings"
    // listItems += "<li><a target = '_blank' href = '" + myLeads[i] + "'>"+myLeads[i]+ "</a></li>"
         listItems += `<li>
                        <a target = '_blank' href = ${myLeads[i]}>
                            ${myLeads[i]}</a>
                        </li>`

}
// DOM manipulation comes with a cost.
ulEl.innerHTML = listItems
}