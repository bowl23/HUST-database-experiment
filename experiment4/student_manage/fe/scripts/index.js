const student = document.querySelector('.student');
const sc = document.querySelector('.sc');
const course = document.querySelector('.course');
const tableBody = document.querySelector('.tableBody')
const tableHead = document.querySelector('.tableHead')

student.addEventListener('click', () => {
  console.log('student');
  axios({
    url: 'http://localhost:3000/api/studentSelect'
  }).then(result => {
    let head = ['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => `<th>${item}</th>`)
    // let list = result.data;
    // console.log(list);
    // console.log(list[0].Sno);
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
    console.log(newlist);
    tableHead.innerHTML = head.join('');
    tableBody.innerHTML = newlist.join('');


    // result.data
  })
})
sc.addEventListener('click', () => {
  console.log('sc');
  axios({
    url: 'http://localhost:3000/api/scSelect'
  }).then(result => {
    let head = ['学号', '课程号', '成绩'].map(item => `<th>${item}</th>`);
    let newlist = result.data.map(item =>
      `<tr class='listItem'>            
            <td>${item.Sno}</td>
            <td>${item.Cno}</td>
            <td>${item.Grade}</td>
            </tr>`
    )
    console.log(newlist);
    tableHead.innerHTML = head.join('');
    tableBody.innerHTML = newlist.join('');
  })
})
course.addEventListener('click', () => {
  console.log('course');
  axios({
    url: 'http://localhost:3000/api/courseSelect'
  }).then(result => {
    console.log(result);
    let head = ['课程号', '课程名称', '前置课程号', '学分',].map(item => `<th>${item}</th>`);
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