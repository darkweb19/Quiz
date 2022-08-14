const quizDB = [
    {
        question: "Q1: What is the  full form of HTML?",
        a: "Hypertext Markup Language",
        b: "Help To My Lord",
        c: "Hypertext MakeUp Language",
        d: "Hey Text Markup Language",
        ans: "ans1"
    },

    {
        question: "Q2: What is the fullform of CSS?",
        a: "tyergdf",
        b: "",
        c: "asdsdf",
        d: "Cascading Style Sheets",
        ans: "ans4"

    },

    {
        question: "Q3: What the fullform of HTTP?",
        a: "iuregfjdh",
        b: "fjegdscxb",
        c: "Hypertext Transfer Protocol",
        d: "ahsjgwfd",
        ans: "ans3"
    },

    {
        question: "Q4: What is the fullform of JS?",
        a: "Juihkfjd",
        b: "avaScript",
        c: "Jfdsgrf",
        d: "efgjds",
        ans: "ans2"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelector('.answer');

let counter = 0;

const loadQuestion = () => {

    const questionList = quizDB[counter];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();


const getCheckAnswer = () => {
    let answ;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answ = curAnsElem.id ;
        }
        
    });
    return answ;
};


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
});