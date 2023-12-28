import Header from "../../components/headers/Header"
import './index.css'

const PersonalGrade = () => {
    return <>
        <Header></Header>
        <div class="center">
            <label>请输入学生学号</label>
            <input type="text" name="Sno" id="Sno" />
            <div class="search">查询</div>
        </div>
        <table class="dataList">
            <tr class="tableHead"></tr>
            <tbody class="tableBody"></tbody>
        </table>
    </>
}
export default PersonalGrade