const cs = document.querySelector('.cs');
const is = document.querySelector('.is');
const ma = document.querySelector('.ma');

const tableHead = document.querySelector('.tableHead');
const tableBody = document.querySelector('.tableBody');


axios({
    url: 'http://localhost:3000/api/statistics/cs'
}).then(result => {
    let head = ['院系', '平均成绩', '最好成绩', '最差成绩'].map(item => `<th>${item}</th>`)
    console.log(result);
    let newlist = result.data.map(item =>
        `<tr classs='listitem'>
            <td>${item.sdeption}</td>
            <td>${item.avg}</td>
            <td>${item.max}</td>
            <td>${item.min}</td>
            </tr>`
    )
    tableHead.innerHTML = head.join('');
    tableBody.innerHTML = newlist.join('');
})
