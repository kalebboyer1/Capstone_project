
const form = document.querySelector('form')
const answer = document.querySelector('#answer')
const shakeBtn = document.getElementById('submit-questions')
const saveButton = document.getElementById('save-button')
const savedList = document.querySelector('#saved-list')

const baseURL = 'http://localhost:4000/api/answer'



let answersArr = [
    "Yes",
    "No",
    "Maybe",
    "Why not",
    "Never",
    "Of course",
    "Not in your lifetime",
    "Absolutely",
    "I doubt it",
    "It's possible, but unlikely"
];


function randomAnswer(evt) {
    evt.preventDefault()
    const randomIndex = Math.floor(Math.random() * answersArr.length);
    const randomAnswer = answersArr[randomIndex];
    answer.textContent = randomAnswer;
}




let input = document.querySelector('#questions-box')
const saveAnswer = () => {
    
    
    let bodyObj = {
        question: input.value,
        answer: answer.textContent
    }
    
    axios.post(baseURL, bodyObj)
    .then(response => {
        createAnswers(response.data)
    })
    .catch(err => console.log(err))
    
}

const createAnswers = (arr) => {
    savedList.innerHTML = ""
    
    arr.forEach((answerObj,index) => {
        let { answer, question } = answerObj
        let listItem = document.createElement('li')
        
        listItem.innerHTML = `<p>question: ${question} answer:${answer}</p> 
        <button onClick='deleteAnswer(${index})' value="${index}">X</button>`
        savedList.appendChild(listItem)
        
    })
}

const deleteAnswer = (value) => {
    console.log('buttonClicked')
    axios.delete(`${baseURL}/${value}`)
    .then(response => {
        createAnswers(response.data)
    })
    .catch(err => console.log(err))
}












shakeBtn.addEventListener('click', randomAnswer)

saveButton.addEventListener('click', saveAnswer)



























// const { getAnswers } = require("../server/controller")
// const { response } = require("express")