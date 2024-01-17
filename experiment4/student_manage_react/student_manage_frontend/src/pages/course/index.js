import Func from "../../components/headers/Func"
import Header from "../../components/headers/Header"
import selectFunc from "../../utils/select"
import addFunc from "../../utils/add"
import updateFunc from "../../utils/update"
import deleteFunc from "../../utils/delete"
import { useState } from "react"


const selectUrl = 'http://localhost:3000/api/course/select'
const addUrl = 'http://localhost:3000/api/course/add'
const updateUrl = 'http://localhost:3000/api/course/update'
const deleteUrl = 'http://localhost:3000/api/course/delete'



const Course = () => {
    const [newlist, setNewlist] = useState([])
    let obj = {
        Cno: null,
        Cname: null,
        Cpno: null,
        Credit: null
    }

    return <>
        <Header></Header>
        <div className="dataFunction">
            <div className="selectBtn" onClick={() => selectFunc(selectUrl, setNewlist)}>查询</div>
            {/* 函数里面传函数，这就是JavaScript带给我的自信 */}
            <div className="addBtn" onClick={() => addFunc(addUrl, selectUrl, setNewlist, obj)}>增加</div>
            <div className="updateBtn" onClick={() => updateFunc(updateUrl, selectUrl, setNewlist, obj)}>修改</div>
            <div className="deleteBtn" onClick={() => deleteFunc(deleteUrl, selectUrl, setNewlist, obj)}>删除</div>
        </div>
        <div className="center">
            <label>课程号</label>
            <input type="text" name="Cno" id="Cno" />
            <label >课程名</label>
            <input type="text" name="Cname" id="Cname" />
            <label >前置课程号</label>
            <input type="text" name="Cpno" id="Cpno" />
            <label >学分</label>
            <input type="text" name="Credit" id="Credit" />
        </div>

        <table className="dataList">
            <thead>
                <tr className="tableHead">{['课程号', '课程名', '前置课程号', '学分'].map(item => <td key={item}>{item}</td>)}</tr>
            </thead>
            <tbody className="tableBody">
                {
                    newlist.map(item => <tr key={item.Cno}>
                        <td>{item.Cno}</td>
                        <td>{item.Cname}</td>
                        <td>{item.Cpno}</td>
                        <td>{item.Credit}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}
export default Course