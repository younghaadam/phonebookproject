// Add contact button 
// create function to link the button to the page Add contact page 

let addContactButton = document.querySelector("#Btn1")
// console.log(addContactButton)
let viewContactButton = document.querySelector("#Btn2")

// function for add conttact button 
addContactButton.addEventListener("click", () => {
    // alert("welcome")
    window.location.href = "/pages/createcontact.html"
})


// function for view contact page 
viewContactButton.addEventListener("click", () => {
    window.location.href = "/pages/contactpage.html"
})




