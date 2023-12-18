const student = document.querySelector('.student');
const sc = document.querySelector('.sc');
const course = document.querySelector('.course');
const gradeStatistics = document.querySelector('.statistics');
const personalGrade = document.querySelector('.personalGrade');

student.addEventListener('click', () => {
    window.location.href = 'student.html'
})

sc.addEventListener('click', () => {
    window.location.href = 'sc.html'
})

course.addEventListener('click', () => {
    window.location.href = 'course.html'
})

gradeStatistics.addEventListener('click', () => {
    window.location.href = 'statistics.html'
})
personalGrade.addEventListener('click', () => {
    window.location.href = 'personalGrade.html'
})