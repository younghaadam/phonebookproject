// Student database store
const contactDatabase = [];

// get forms elemen
const forms = document.querySelector('#form-data');

// constructor function as object template
function Contact(firstname, lastname, phonenumber, emailaddress,) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.phone = phonenumber;
    this.email = emailaddress;
}

// function to create object
function createObj() {
    // get form values
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const phone = document.querySelector('#phoneNumber').value;
    const email = document.querySelector('#email').value;

    const contactObj = new Contact(fname, lname, phone, email);
    return contactObj;

}

//submit button function
// let createBtn = document.querySelector('#create-btn');

// store studentsData in local storage
function storeData(contactObj) {
    // check if local storage is empty
    if (localStorage.getItem('contactsData') === null) {
        // add data to local storage
        localStorage.setItem('contactsData', JSON.stringify(contactDatabase));
    } else {
        // get data from local storage
        const contactsData = JSON.parse(localStorage.getItem('contactsData'));
        // add data to local storage
        contactsData.push(contactObj);
        localStorage.setItem('studentsData', JSON.stringify(contactsData));
    }
}

forms.addEventListener('submit', function (event) {
    event.preventDefault();
    const newContact = createObj();
    contactDatabase.push(newContact);
    // store data in local storage
    storeData(newContact);
    console.log(contactDatabase);
    // function to clear form
    forms.reset()

})



