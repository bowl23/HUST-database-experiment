const cs = document.querySelector('.cs');
const is = document.querySelector('.is');
const ma = document.querySelector('.ma');

cs.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/statistics/cs'
    }).then(result => {
        let head = ['平均成绩', '最好成绩', '最差成绩', '优秀率', '不及格人数'].map(item => `<th>${item}</th>`)
        let deptGrade = result.data[0]
        let newlist = `<tr classs='listitem'>
        <td>${deptGrade.average}</td>
        <td>${deptGrade.best}</td>
        <td>${deptGrade.worst}</td>
        <td>${deptGrade.goodLevel}</td>
        <td>${deptGrade.badNum}</td>
        </tr>`
        tableHead.innerHTML = head.join('');
        tableBody.innerHTML = newlist.join('');
    })
})
is.addEventListener('click', () => {

})
ma.addEventListener('click', () => {

})