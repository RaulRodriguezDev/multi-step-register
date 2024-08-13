import { validateEmail, validateTopicSelected, validateUserName } from "./customValidation.js"
import { cardOneElements, cardTwoOptions, globalElements, stepOneValues, stepTwoValues } from "./models.js"
import { getCardOneElements, getCardTwoElements, handleClick } from "./helpers.js"

window.addEventListener('load', () => {
    getCardOneElements(cardOneElements)
    getCardTwoElements(cardTwoOptions)
    globalElements.errorList = document.querySelector('#error-list')
    globalElements.stepOneForm = document.querySelector('#card-step-one')
    globalElements.stepTwoForm = document.querySelector('#card-step-two')
    globalElements.stepThreeForm = document.querySelector('#card-step-three')
    globalElements.summaryNameField = document.querySelector('#summary-name')
    globalElements.summaryEmailField = document.querySelector('#summary-email')
    globalElements.summaryTopicsField = document.querySelector('#summary-topics')
    globalElements.toast = document.querySelector('#toast-notification')
    globalElements.toastButton = document.querySelector('#toast-button')

    cardOneElements.userName.addEventListener('blur', (event) => validateUserName(event.target))
    cardOneElements.email.addEventListener('blur', (event) => validateEmail(event.target))

    cardTwoOptions.softwareDevelopment.addEventListener('click', handleClick)
    cardTwoOptions.userExperience.addEventListener('click', handleClick)
    cardTwoOptions.graphicDesign.addEventListener('click', handleClick)

    globalElements.stepOneForm.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log('submitting step one form')
        const { userName, email } = cardOneElements
        validateUserName(userName)
        validateEmail(email)

        if(!globalElements.errorList.children.length > 0) {
            stepOneValues.userName = userName.value
            stepOneValues.email = email.value
            event.target.classList.add('hidden')
            globalElements.stepTwoForm.classList.remove('hidden')
        }

        console.log(stepOneValues)
    })

    globalElements.stepTwoForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const isValid = validateTopicSelected()

        if(isValid) {
            event.target.classList.add('hidden')
            globalElements.stepThreeForm.classList.remove('hidden')
            globalElements.summaryNameField.textContent = stepOneValues.userName
            globalElements.summaryEmailField.textContent = stepOneValues.email

            for(const topic in stepTwoValues) {
                if(stepTwoValues[topic]) {
                    const li = document.createElement('li')
                    li.textContent = stepTwoValues[topic]
                    globalElements.summaryTopicsField.append(li)
            }
        }
    }})

    globalElements.stepThreeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        globalElements.toast.classList.remove('hidden')
        globalElements.toast.classList.add('toast-container')
    })

    globalElements.toastButton.addEventListener('click', () => {
        window.location.reload()
    })

})