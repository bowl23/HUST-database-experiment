const tableHead = document.querySelector('.tableHead');
const tableBody = document.querySelector('.tableBody');


// 获取四个功能按钮
const addBtn = document.querySelector('.addBtn');
const updateBtn = document.querySelector('.updateBtn');
const selectBtn = document.querySelector('.selectBtn');
const deleteBtn = document.querySelector('.deleteBtn');

// 获取输入框
let Sno = document.querySelector('#Sno');
let Sname = document.querySelector('#Sname');
let Ssex = document.querySelector('#Ssex');
let Sage = document.querySelector('#Sage');
let Sdept = document.querySelector('#Sdept');
let Scholarship = document.querySelector('#Scholarship');


// 增
addBtn.addEventListener('click', () => {
    console.log('click');
    console.log(Sno.value, Sname.value, Ssex.value, Sage.value, Sdept.value, Scholarship.value);
    axios({
        url: 'http://localhost:3000/api/student/add',
        params: {
            Sno: Sno.value,
            Sname: Sname.value,
            Ssex: Ssex.value,
            Sage: Sage.value,
            Sdept: Sdept.value,
            Scholarship: Scholarship.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload();

})

// 改
updateBtn.addEventListener('click', () => {
    console.log('update');
    axios({
        url: 'http://localhost:3000/api/student/update',
        params: {
            Sno: Sno.value,
            Sname: Sname.value,
            Ssex: Ssex.value,
            Sage: Sage.value,
            Sdept: Sdept.value,
            Scholarship: Scholarship.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload();
})

// 查
selectBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/student/select'
    }).then(result => {
        let head = ['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => `<th>${item}</th>`)
        let newlist = result.data.map(item =>
            `<tr class='listItem'>
            <td>${item.Sno}</td>
            <td>${item.Sname}</td>
            <td>${item.Ssex}</td>
            <td>${item.Sage}</td>
            <td>${item.Sdept}</td>
            <td>${item.Scholarship}</td>
            </tr>`
        )
        tableHead.innerHTML = head.join('');
        tableBody.innerHTML = newlist.join('');
    })
})

// 删
deleteBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/student/delete',
        params: {
            Sno: Sno.value,
            Sname: Sname.value,
            Ssex: Ssex.value,
            Sage: Sage.value,
            Sdept: Sdept.value,
            Scholarship: Scholarship.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload();
})

