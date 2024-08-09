const getCardOneElements = (cardOneElements) => {
    cardOneElements.userName = document.querySelector('#name')
    cardOneElements.email = document.querySelector('#email')
}

const getCardTwoElements = (cardTwoOptions) => {
    const stepTwoForm = document.querySelector('#card-step-two')
    cardTwoOptions.softwareDevelopment = stepTwoForm.querySelector('#softwareDevelopment')
    cardTwoOptions.userPreferences = stepTwoForm.querySelector('#userPreferences')
    cardTwoOptions.graphicDesign = stepTwoForm.querySelector('#graphicDesign')
}

export { getCardOneElements, getCardTwoElements }