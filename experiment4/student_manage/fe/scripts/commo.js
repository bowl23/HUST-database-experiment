const student = document.querySelector('.student');
const sc = document.querySelector('.sc');
const course = document.querySelector('.course');

student.addEventListener('click', () => {
    window.location.href = 'student.html'
})

sc.addEventListener('click', () => {
    window.location.href = 'sc.html'
})

course.addEventListener('click', () => {
    window.location.href = 'course.html'
})