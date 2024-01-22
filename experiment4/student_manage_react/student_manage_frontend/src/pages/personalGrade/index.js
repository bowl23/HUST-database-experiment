import { useState } from "react"
import Header from "../../components/headers/Header"
import './index.css'
import selectStu from "../../utils/selectStu"

const selectUrl = 'http://loaclhost:3000/api/personalGrade'
const PersonalGrade = () => {
  const [newlist, setNewlist] = useState([])
  let sno = null;
  return <>
    <Header></Header>
    <div className="center">
      <label>请输入学生学号</label>
      <input type="text" name="Sno" id="Sno" onChange={(e) => {
        sno = e.target.value
        // console.log(sno);
      }} />
      <div className="search"
        onClick={() => selectStu(selectUrl, setNewlist, sno)}
      >查询
      </div>
    </div >
    <table className="dataList">
      <thead className="tableHead">
        <tr>
          {['学号', '姓名', '性别', '年龄', '系别', '奖学金'].map(item => <th key={item}>{item}</th>)}
        </tr>
      </thead>
      <tbody className="tableBody">
        {newlist.map(item =>
          <tr key={item.Sno}>
            <td>{item.Sno}</td>
            <td>{item.Sname}</td>
            <td>{item.Ssex}</td>
            <td>{item.Sage}</td>
            <td>{item.Sdept}</td>
            <td>{item.Scholarship}</td>
          </tr>)
        }
      </tbody>
    </table>
  </>
}
export default PersonalGrade