const tableHead = document.querySelector('.tableHead');
const tableBody = document.querySelector('.tableBody');

// 获取四个按钮
const addBtn = document.querySelector('.addBtn');
const updateBtn = document.querySelector('.updateBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const selectBtn = document.querySelector('.selectBtn');

// 获取输入框
let Sno = document.querySelector('#Sno');
let Cno = document.querySelector('#Cno');
let Grade = document.querySelector('#Grade');

// 查
selectBtn.addEventListener('click', () => {
    console.log('select');
    axios({
        url: 'http://localhost:3000/api/sc/select'
    }).then(result => {
        let head = ['学号', '课程号', '成绩'].map(item => `<th>${item}</th>`)
        let newlist = result.data.map(item =>
            `<tr class='listitem'>
            <td>${item.Sno}</td>
            <td>${item.Cno}</td>
            <td>${item.Grade}</td>
            </tr>`
        )
        tableHead.innerHTML = head.join('');
        tableBody.innerHTML = newlist.join('');
    })
})

// 增
addBtn.addEventListener('click', () => {
    console.log('add');
    axios({
        url: 'http://localhost:3000/api/sc/add',
        params: {
            Sno: Sno.value,
            Cno: Cno.value,
            Grade: Grade.value
        }
    }).then(result => {
        alert(result.data)
    })
    window.location.reload();
})

// 改
updateBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/sc/update',
        params: {
            Sno: Sno.value,
            Cno: Cno.value,
            Grade: Grade.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload();
})

deleteBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/sc/delete',
        params: {
            Sno: Sno.value,
            Cno: Cno.value,
            Grade: Grade.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload;
})

