import { globalElements } from "./models.js"

const createLiElement = ( message, id ) => {
    const li = document.createElement('li')
    li.textContent = message
    li.id = id
    li.classList.add('error-message')

    return li
}

const validateUserName = ( nameInput ) => {
    const { value } = nameInput
    const nameRegex = /^[a-zA-Z\ ]{3,}$/
    const id = 'name-error'

    if(!nameRegex.test(value)) {
        nameInput.classList.add('error')
        globalElements.errorList.querySelector(`#${id}`) == null &&
            globalElements.errorList.append(createLiElement('Invalid Name', id))
    }
    else {
        nameInput.classList.remove('error')
        globalElements.errorList.querySelector(`#${id}`)?.remove()
    }
}

const validateEmail = ( emailInput ) => {
    const { value } = emailInput
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const id = 'email-error'

    if(!emailRegex.test(value)) {
        emailInput.classList.add('error')
        globalElements.errorList.append(createLiElement('Invalid Email', id))
    }
    else {
        emailInput.classList.remove('error')
        globalElements.errorList.querySelector(`#${id}`)?.remove()
    }
    
}

export { validateUserName, validateEmail }