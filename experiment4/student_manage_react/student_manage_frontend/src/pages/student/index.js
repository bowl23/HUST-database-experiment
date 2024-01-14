import '../common.scss'
import Header from '../../components/headers/Header'
import axios from 'axios'
import { useState } from 'react'
import selectFunc from '../../utils/select'
import addFunc from '../../utils/add'

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
            <div className="selectBtn" onClick={() => selectFunc('http://localhost:3000/api/student/select', setNewlist)}>查询</div>
            {/* 函数里面传函数，这就是JavaScript带给我的自信 */}
            <div className="addBtn" onClick={() => addFunc('http://localhost:3000/api/student/add', setNewlist, obj)}>增加</div>
            <div className="updateBtn">修改</div>
            <div className="deleteBtn">删除</div>
        </div>

        <form className="center" >
            <label>学号</label>
            <input type="text" id="Sno" name="Sno"
                onChange={(e) => setObj({
                    Sno: e.target.value,
                    ...obj
                }
                )} />
            <label >姓名</label>
            <input type="text" id="Sname" name="Sname"
                onChange={(e) => setObj({
                    Sname: e.target.value,
                    ...obj
                })}
            />
            <label >性别</label>
            <input type="text" id="Ssex" name="Ssex"
                onChange={(e) => setObj({
                    Ssex: e.target.value,
                    ...obj
                })}
            />
            <label >年龄</label>
            <input type="text" id="Sage" name="Sage"
                onChange={(e) => setObj({
                    Sage: e.target.value,
                    ...obj
                })}
            />
            <label >系别</label>
            <input type="text" id="Sdept" name="Sdept"
                onChange={(e) => setObj({
                    Sdept: e.target.value,
                    ...obj
                })}
            />
            <label >奖学金</label>
            <input type="text" id="Scholarship" name="Scholarship"
                onChange={(e) => setObj({
                    Scholarship: e.target.value,
                    ...obj
                })}
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