import '../common.scss'
import Header from '../../components/headers/Header'
import axios from 'axios'
import { useState } from 'react'
import selectFunc from '../../utils/select'
import addFunc from '../../utils/add'
import deleteFunc from '../../utils/delete'
import updateFunc from '../../utils/update'

const selectUrl = 'http://localhost:3000/api/student/select'
const addUrl = 'http://localhost:3000/api/student/add'
const updateUrl = 'http://localhost:3000/api/student/update'
const deleteUrl = 'http://localhost:3000/api/student/delete'



const Student = () => {
    const [newlist, setNewlist] = useState([])
    let obj =
    {
        Sno: null,
        Sname: null,
        Ssex: null,
        Sage: null,
        Sdept: null,
        Scholarship: null
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

        <form className="center" >
            <label>学号</label>
            <input type="text" id="Sno" name="Sno"
                onChange={(e) => {
                    obj =
                    {
                        ...obj,
                        Sno: e.target.value,
                    }

                }} />
            <label >姓名</label>
            <input type="text" id="Sname" name="Sname"
                onChange={(e) => {
                    obj =
                    {
                        ...obj,
                        Sname: e.target.value,
                    }
                }}
            />
            <label >性别</label>
            <input type="text" id="Ssex" name="Ssex"
                onChange={(e) => {
                    obj =
                    {
                        ...obj,
                        Ssex: e.target.value,
                    }
                }}
            />
            <label >年龄</label>
            <input type="text" id="Sage" name="Sage"
                onChange={(e) => {
                    obj =
                    {
                        ...obj,
                        Sage: e.target.value,
                    }
                }}
            />
            <label >系别</label>
            <input type="text" id="Sdept" name="Sdept"
                onChange={(e) => {
                    obj =
                    {
                        ...obj,
                        Sdept: e.target.value,
                    }
                }}
            />
            <label >奖学金</label>
            <input type="text" id="Scholarship" name="Scholarship"
                onChange={(e) => {
                    console.log(e.target.value);
                    obj =
                    {
                        ...obj,
                        Scholarship: e.target.value,
                    }
                }}
            />
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