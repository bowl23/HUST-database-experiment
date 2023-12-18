const tableHead = document.querySelector('.tableHead');
const tableBody = document.querySelector('.tableBody');


// 获取四个功能按钮
const addBtn = document.querySelector('.addBtn');
const updateBtn = document.querySelector('.updateBtn');
const selectBtn = document.querySelector('.selectBtn');
const deleteBtn = document.querySelector('.deleteBtn');

// 获取输入框
const Cno = document.querySelector('#Cno');
const Cname = document.querySelector('#Cname');
const Cpno = document.querySelector('#Cpno');
const Credit = document.querySelector('#Credit');


// 增
addBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/course/add',
        params: {
            Cno: Cno.value,
            Cname: Cname.value,
            Cpno: Cpno.value,
            Credit: Credit.value
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
        url: 'http://localhost:3000/api/course/update',
        params: {
            Cno: Cno.value,
            Cname: Cname.value,
            Cpno: Cpno.value,
            Credit: Credit.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload();
})
// 查
selectBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/course/select'
    }).then(result => {
        let head = ['课程号', '课程名', '前置课程号', '学分'].map(item => `<th>${item}</th>`)
        let newlist = result.data.map(item =>
            `<tr class='listItem'>
            <td>${item.Cno}</td>
            <td>${item.Cname}</td>
            <td>${item.Cpno}</td>
            <td>${item.Credit}</td>
            </tr>`
        )
        tableHead.innerHTML = head.join('');
        tableBody.innerHTML = newlist.join('');
    })
})

// 删
deleteBtn.addEventListener('click', () => {
    axios({
        url: 'http://localhost:3000/api/course/delete',
        params: {
            Cno: Cno.value,
            Cname: Cname.value,
            Cpno: Cpno.value,
            Credit: Credit.value
        }
    }).then(result => {
        alert(result.data);
    })
    window.location.reload();
})