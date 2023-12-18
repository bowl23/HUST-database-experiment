const tableHead = document.querySelector('.tableHead');
const tableBody = document.querySelector('.tableBody');

let Sno = document.querySelector('#Sno');

const search = document.querySelector('.search');

// 查
search.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/personalGrade',
        params: {
            Sno: Sno.value
        }
    }).then(result => {
        let head = ['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => `<th>${item}</th>`)
        let list = result.data[0];
        let newlist =
            `<tr class='listItem'>
            <td>${list.Sno}</td>
            <td>${list.Sname}</td>
            <td>${list.Ssex}</td>
            <td>${list.Sage}</td>
            <td>${list.Sdept}</td>
            <td>${list.Scholarship}</td>
            </tr>`

        tableHead.innerHTML = head.join('');
        tableBody.innerHTML = newlist;
    })
})