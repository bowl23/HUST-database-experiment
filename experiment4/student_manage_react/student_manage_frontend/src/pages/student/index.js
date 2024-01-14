import '../common.scss'
import Header from '../../components/headers/Header'
import axios from 'axios'
import { useState } from 'react'

const Student = () => {
    const [newlist, setNewlist] = useState([])

    const select = () => {
        axios({
            url: 'http://localhost:3000/api/student/select'
        }).then(result => {
            setNewlist(result.data);
        })
    }

    return <>
        <Header></Header>

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
                <tr>
                    {['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => <th key={item}>{item}</th>)}
                </tr>

            </thead>
            <tbody className="tableBody">
                {newlist.map(item =>
                    <tr className='listItem' key={item.Sno}>
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