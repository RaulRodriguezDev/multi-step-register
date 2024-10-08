import { cardTwoOptions, stepTwoValues, steps } from "./models.js"

const getCardOneElements = (cardOneElements) => {
    cardOneElements.userName = document.querySelector('#name')
    cardOneElements.email = document.querySelector('#email')
}

const getCardTwoElements = (cardTwoOptions) => {
    const stepTwoForm = document.querySelector('#card-step-two')
    cardTwoOptions.softwareDevelopment = stepTwoForm.querySelector('#softwareDevelopment')
    cardTwoOptions.userExperience = stepTwoForm.querySelector('#userExperience')
    cardTwoOptions.graphicDesign = stepTwoForm.querySelector('#graphicDesign')
}

const handleClick = (event) => {
    const { value , name } = event.target

    if(cardTwoOptions[name].classList.contains('selected')) {
        cardTwoOptions[name].classList.remove('selected')
        stepTwoValues[name] = null
    }
    else{
        cardTwoOptions[name].classList.add('selected')
        stepTwoValues[name] = value
    }
}

const setStep  = ( step ) => {
    document.querySelector('#card-title').textContent = steps[step - 1]
    document.querySelector('#stepper-label').textContent = `Step ${step} of 3`
    document.querySelector(`#step-${step}`).classList.add('active')
}
export { getCardOneElements, getCardTwoElements, handleClick, setStep }