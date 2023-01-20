//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const register_box = document.querySelector(".register_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const nav_buttons = register_box.querySelector(".buttons");
const submitForm = register_box.querySelector(".submitForm");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer_sec");
const timerBox = document.querySelector(".timer");
const crown = document.querySelector(".icon .fas.fa-crown");

// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    register_box.classList.add("activeInfo"); //show register box
    nav_buttons.style.display = "none";
}

submitForm.onclick = () => {
    if (validForm) {
        register_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.add("activeQuiz"); //show quiz box
        showQuetions(0); //calling showQestions function
        queCounter(1); //passing 1 parameter to queCounter
        startTimer(15); //calling startTimer function
        startTimerLine(0); //calling startTimerLine function
    }
    else {
        console.log("Please fill all required fields");
    }
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let finalScore = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    let que_counter = parseInt(index, 10) + 1
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + que_counter + ". " + shuffledQuestion[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + shuffledQuestion[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + shuffledQuestion[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + shuffledQuestion[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + shuffledQuestion[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = shuffledQuestion[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        let divWidth = document.getElementsByClassName("time_line")[0].offsetWidth;
        userScore += 500 //upgrading score value with 1
        finalScore = parseInt(userScore + (divWidth - 550) * -1)
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + parseInt(userScore + (divWidth - 550) * -1))
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    restart_quiz.style.display = "none";
    const scoreText = result_box.querySelector(".score_text");
    if (finalScore > 2000) { // if user scored more than 2000
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span><p>' + user.name + '</p> Parabéns! 🎉 Você fez <p>' + finalScore + '</p></span>';
        crown.style.color = "gold"
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (finalScore > 1000) { // if user scored more than 1000
        let scoreTag = '<span><p>' + user.name + '</p> Muito bom! 😎 Você fez <p>' + finalScore + '</p></span>';
        crown.style.color = "silver"
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 1000
        let scoreTag = '<span><p>' + user.name + '</p> Continue Tentando! 😬 Você só fez <p>' + finalScore + '</p></span>';
        crown.style.color = "tan"
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 5) { //if timer is less than 5
            // timeCount.classList.add(".timer_sec_final")
            timeCount.classList.remove(".timer_sec")

        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        time_line.style.background = "#007bff";
        timeCount.classList.remove("timer_sec_final");
        timeCount.classList.add("timer_sec");
        timeText.style.color = "#004085"

        if (time > 372 && time < 550) {
            time_line.style.background = "red";
            timeCount.classList.remove("timer_sec");
            timeCount.classList.add("timer_sec_final");
        }
        else if (time == 550) { //if time value is equal 550
            clearInterval(counterLine); //clear counterLine
            time_line.style.background = "red";
            timeCount.classList.remove("timer_sec");
            timeCount.classList.add("timer_sec_final");
            timeText.style.color = "red"; //change the time color to time off
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + shuffledQuestion.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

// add user register to local storage
let user = {}
let userData = []
let validForm = false
const quitButton = document.getElementById("quitButton");

const handleUsersRegister = (user) => {
    if (localStorage.getItem("users")) {
        let updateUserList = JSON.parse(localStorage.getItem("users"))
        updateUserList.push(user)
        localStorage.setItem("users", JSON.stringify(updateUserList));
    } else {
        userData.push(user)
        localStorage.setItem("users", JSON.stringify(userData));
        console.log(userData)
    }
}

// if quit button clicked
quitButton.addEventListener("click", function () {
    user.score = JSON.stringify(finalScore)
    quitButton.innerHTML = "Enviando...";
    quitButton.style.background = '#777';
    quitButton.style.border = '1px solid #777';
    quitButton.style.pointerEvents = "none";

    handleUsersRegister(user)

    setTimeout(() => {
        quitButton.innerHTML = "Enviado com sucesso";
        quitButton.style.background = 'green';
        quitButton.style.pointerEvents = "none";
        setTimeout(() => {
            window.location.reload(); //reload the current window
        }, 2000);
    }, 1500);
});

// if submit button clicked
const handleSubmit = (event) => {
    event.preventDefault();
    if (ValidaCPF()) {
        const formData = new FormData(event.target);
        const formDataJSON = Object.fromEntries(formData);
    
        user.name = formDataJSON.name
        user.cpf = formDataJSON.cpf
        user.phone = formDataJSON.phone
        user.profession = formDataJSON.profession
        user.lgpd = formDataJSON.lgpd
        user.score = 0
    
        console.log(user)
        isEmpty(user)
    } else {
        alert("CPF inválido")
    }
}

// check if form is empty
const form = document.getElementById('contactForm')
form.addEventListener('submit', handleSubmit)

function isEmpty(user) {
    validForm = Object.keys(user).length > 0 ? true : false
    submitForm.innerHTML = "Processando cadastro...";
    submitForm.style.background = '#777';
    submitForm.style.border = '1px solid #777';
    submitForm.style.pointerEvents = "none";

    setTimeout(() => {
        submitForm.innerHTML = "Iniciar o Quiz";
        submitForm.insertAdjacentHTML("beforeend", tickIconTag);
        submitForm.style.background = 'green';
        submitForm.style.pointerEvents = "all";
    }, 2000);
}

// validar cpf
function ValidaCPF() {
    let cpf = document.getElementById("cpf").value;
    strCPF = cpf.replace(/[^a-zA-Z0-9]/g, '');
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
}

// apply mask to cpf
function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

// Get the phone input element
var phoneInput = document.getElementById("phone");

// Add an event listener for the keyup event
phoneInput.addEventListener("keyup", function() {
  // Get the current value of the input
  var phoneNumber = phoneInput.value;
  
  // Use a regular expression to format the phone number as (xxx) xxx-xxxx
  phoneNumber = phoneNumber.replace(/\D/g, "")
  phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, "($1) $2");
  phoneNumber = phoneNumber.replace(/(\d{5})(\d)/, "$1-$2");
  phoneNumber = phoneNumber.replace(/(\d{4})(\d)/, "$1$2");
  
  // Update the value of the input with the formatted phone number
  phoneInput.value = phoneNumber;
});