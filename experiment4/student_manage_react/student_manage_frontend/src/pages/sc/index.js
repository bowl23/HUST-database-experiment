import Header from "../../components/headers/Header"
import selectFunc from "../../utils/select"
import addFunc from "../../utils/add"
import updateFunc from "../../utils/update"
import deleteFunc from "../../utils/delete"
import { useState } from "react"

const selectUrl = 'http://localhost:3000/api/sc/select'
const addUrl = 'http://localhost:3000/api/sc/add'
const updateUrl = 'http://localhost:3000/api/sc/update'
const deleteUrl = 'http://localhost:3000/api/sc/delete'


const Sc = () => {
    const [newlist, setNewlist] = useState([])
    let obj = {
        Sno: null,
        Course: null,
        Grade: null
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
            <label>学号</label>
            <input type="text" name="Sno" id="Sno" onChange={(e) => {
                console.log(e.target.value);
                obj = {
                    ...obj,
                    Sno: e.target.value,
                }
            }} />
            <label >课程号</label>
            <input type="text" name="Cno" id="Cno"
                onChange={(e) => {
                    obj = {
                        ...obj,
                        Cno: e.target.value
                    }
                }}
            />
            <label >成绩</label>
            <input type="text" name="Grade" id="Grade"
                onChange={(e) => {
                    obj = {
                        ...obj,
                        Grade: e.target.value
                    }
                }}
            />
        </div>

        <table className="dataList">
            <thead>
                <tr className="tableHead">
                    {['学号', '课程号', '成绩'].map(item => <th key={item}>{item}</th>)}
                </tr>
            </thead>
            <tbody className="tableBody">
                {newlist.map(item =>
                    <tr key={`${item.Sno}` + `${item.Cno}`}>
                        <td>{item.Sno}</td>
                        <td>{item.Cno}</td>
                        <td>{item.Grade}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}
export default Sc
