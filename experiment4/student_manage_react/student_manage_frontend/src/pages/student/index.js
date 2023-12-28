import '../common.scss'
import Header from '../../components/headers/Header'
// import Func from '../../components/headers/Func'
import axios from 'axios'

const Student = () => {
    // const tableHead = document.querySelector('.tableHead')
    // const tableBody = document.querySelector('.tableBody')

    let newlist = [
        {
            "Sno": "200215121",
            "Sname": "李勇",
            "Ssex": "男",
            "Sage": 20,
            "Sdept": "CS",
            "Scholarship": "否"
        },
        {
            "Sno": "200215122",
            "Sname": "刘晨",
            "Ssex": "女",
            "Sage": 19,
            "Sdept": "CS",
            "Scholarship": "否"
        },
        {
            "Sno": "200215123",
            "Sname": "王敏",
            "Ssex": "女",
            "Sage": 18,
            "Sdept": "MA",
            "Scholarship": "否"
        },
        {
            "Sno": "200215124",
            "Sname": "万祖桓",
            "Ssex": "男",
            "Sage": 19,
            "Sdept": "CS",
            "Scholarship": "是"
        },
        {
            "Sno": "200215125",
            "Sname": "张立",
            "Ssex": "男",
            "Sage": 19,
            "Sdept": "IS",
            "Scholarship": "否"
        },
        {
            "Sno": "200215126",
            "Sname": "bowl",
            "Ssex": "男",
            "Sage": 19,
            "Sdept": "CS",
            "Scholarship": "是"
        },
        {
            "Sno": "200215127",
            "Sname": "入江之鲸",
            "Ssex": "男",
            "Sage": 19,
            "Sdept": "CSE",
            "Scholarship": "是"
        }
    ]
    // let head;

    const select = () => {
        axios({
            url: 'http://localhost:3000/api/student/select'
        }).then(result => {
            // head = ['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => `<th>${item}</th>`)
            newlist = result.data
            // .map(item =>
            //     <tr class='listItem'>
            //         <td>{item.Sno}</td>
            //         <td>{item.Sname}</td>
            //         <td>{item.Ssex}</td>
            //         <td>{item.Sage}</td>
            //         <td>{item.Sdept}</td>
            //         <td>{item.Scholarship}</td>
            //     </tr>
            // )
            console.log(result.data);
            console.log(newlist);
            // tableHead.innerHTML = head.join('');
            // tableBody.innerHTML = newlist.join('');
        })
        // console.log(newlist);
    }

    // const add

    return <>
        <Header></Header>
        {/* <Func></Func> */}
        <div className="dataFunction">
            <div className="selectBtn" onClick={select}>查询</div>
            <div className="addBtn">增加</div>
            <div className="updateBtn">修改</div>
            <div className="deleteBtn">删除</div>
        </div>
        <form className="center" >
            <label>学号</label>
            <input type="text" id="Sno" name="Sno" />
            <label >姓名</label>
            <input type="text" id="Sname" name="Sname" />
            <label >性别</label>
            <input type="text" id="Ssex" name="Ssex" />
            <label >年龄</label>
            <input type="text" id="Sage" name="Sage" />
            <label >系别</label>
            <input type="text" id="Sdept" name="Sdept" />
            <label >奖学金</label>
            <input type="text" id="Scholarship" name="Scholarship" />
        </form >

        <table className="dataList">
            <thead className="tableHead">
                {['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => <th key={item}>{item}</th>)}
            </thead>
            <tbody className="tableBody">
                {newlist.map(item =>
                    <tr class='listItem'>
                        <td>{item.Sno}</td>
                        <td>{item.Sname}</td>
                        <td>{item.Ssex}</td>
                        <td>{item.Sage}</td>
                        <td>{item.Sdept}</td>
                        <td>{item.Scholarship}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}
export default Student