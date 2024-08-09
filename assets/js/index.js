import { validateEmail, validateUserName } from "./customValidation.js"
import { cardOneElements, cardTwoOptions, globalElements, stepOneValues, stepTwoValues } from "./models.js"
import { getCardOneElements, getCardTwoElements } from "./helpers.js"

window.addEventListener('load', () => {
    getCardOneElements(cardOneElements)
    getCardTwoElements(cardTwoOptions)
    globalElements.errorList = document.querySelector('#error-list')
    globalElements.stepOneForm = document.querySelector('#card-step-one')

    cardOneElements.userName.addEventListener('blur', (event) => validateUserName(event.target))
    cardOneElements.email.addEventListener('blur', (event) => validateEmail(event.target))

    globalElements.stepOneForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        const { userName, email } = cardOneElements
        validateUserName(userName)
        validateEmail(email)

        if(!globalElements.errorList.children.length > 0) {
            stepOneValues.userName = userName.value
            stepOneValues.email = email.value
            event.target.classList.add('hidden')
            document.querySelector('#card-step-two').classList.remove('hidden')
        }

        console.log(stepOneValues)
    })

})