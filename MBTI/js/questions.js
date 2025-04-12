import { questions } from "./data.js";
// import해서 다른 js파일 가져올때 이 js파일을 연결하는 html script 태그에
// type="module" 을 적어줘야 문제가 생기지 않음

const progressValueEl = document.querySelector(".progress .value");
// progressValueEl 이게 진행도 바
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");
// 초이스 더 넣을꺼면 여기에 변수 하나 할당 해야함.

let currentNumber = 0;
let mbti = "";

function renderQuestion() {
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  // 질문 넣을 꺼면 여기에 추가해야함.
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
}
//현제 페이지가 10번까지 했다면  showResultPage를 실행하며 리턴으로 종료되는 그림
function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
  }
  // 만약 currentNumber가 questions.length만큼 채워지면 리턴하는 함수
  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  // mbti = 'i' + 'n' + 'f' + 'j'
  currentNumber = currentNumber + 1;
  renderQuestion();
}
function showResultPage() {
  location.href = "./results.html?mbti=" + mbti; //쿼리스트링
}
// 결과 페이지로 넘어가기 위해 만들어야하는 코드 /results.html?mbti=' + mbti

choice1El.addEventListener("click", function () {
  nextQuestion(0);
});
choice2El.addEventListener("click", function () {
  nextQuestion(1);
});
// 질문 수 늘리면 여기도 추가

renderQuestion();
