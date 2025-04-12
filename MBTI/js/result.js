
import {results, mbtis} from './data.js'

// http://127.0.0.1:5500/results.html?mbti=isfj

const mbti = new URLSearchParams(location.search).get('mbti')
// URLSearchParams(location.search) ?이후 쿼리 스트링의 정보를 가져오는 역할
console.log(mbti)
const result = results[mbtis[mbti]]
// mbti 이름 바꾸고 싶으면 전체를 바꿔야하고 위에 있는 const mbti에서 
// mbti 값을 지정해둔 숫자 값으로 받아와서 표현

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')
// HTML에 있는 class 값들을 찾아오는 용도

titleEl.innerHTML = result.title
characterEl.src = result.character
// data.js 에서 result.title, result.character 값을 가져오는 역할

boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
// 박스에 있는 텍스트 4개 가져오는 역할

jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})
// 추천직업 텍스트 2개 가져오는 역할

lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg
// lectureUrl, lectureImg 가져오는 역할