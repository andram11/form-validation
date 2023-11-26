const form= document.getElementById('form')
const password1El= document.getElementById('password')
const password2El= document.getElementById('passwordConfirm')
const messageContainer= document.querySelector('.message-container')
const message= document.getElementById('message')

let isValid=false
let passwordsMatch= false

function validateForm(){
    //Using constraint API
    isValid= form.checkValidity()
    //Style main message for error
    if(!isValid){
        message.textContent = 'Please fill out all fields.'
        message.style.color= 'rgb(227, 89, 89)'
        messageContainer.style.borderColor= 'rgb(227, 89, 89)'
        return 
    }
    //Check if passwords match
    if(password1El.value === password2El.value){
        passwordsMatch= true
        password1El.style.borderBlock = 'green'
        password2El.style.borderBlock = 'green'
    } else {
        passwordsMatch=false
        message.textContent = 'Make sure passwords match'
        message.style.color= 'rgb(227, 89, 89)'
        messageContainer.style.borderColor= 'rgb(227, 89, 89)'
        password1El.style.borderColor= 'rgb(227, 89, 89)'
        password2El.style.borderColor= 'rgb(227, 89, 89)'
        return
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch){
        message.textContent='Successfully Registered!'
        message.style.color= 'green'
        messageContainer.style.borderColor= 'green'
    }

}

function storeFormData(){
    const user={
        name: form.name.value,
        phone: form.phone.value,
        email:form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    //Do something with user data
    console.log(user)
}

function processFormData(e){
    e.preventDefault()
    //console.log(e)
    validateForm()
    //Submit data if valid
    if (isValid && passwordsMatch){
        storeFormData()
    }
  
}

//Event listener
form.addEventListener('submit', processFormData)