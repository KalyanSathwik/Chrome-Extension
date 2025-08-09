function save(){
    console.log("Button Clicked by onclick\n")
}

let inputbtn = document.getElementById("input-btn")

inputbtn.addEventListener("Click", function() {
    console.log("Button clicked by eventlistener")
})