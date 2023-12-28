import Func from "../../components/headers/Func"
import Header from "../../components/headers/Header"

const Course = () => {
    return <>
        <Header></Header>
        <Func></Func>
        <div class="center">
            <label>课程号</label>
            <input type="text" name="Cno" id="Cno" />
            <label >课程名</label>
            <input type="text" name="Cname" id="Cname" />
            <label >前置课程号</label>
            <input type="text" name="Cpno" id="Cpno" />
            <label >学分</label>
            <input type="text" name="Credit" id="Credit" />
        </div>

        <table class="dataList">
            <tr class="tableHead"></tr>
            <tbody class="tableBody"></tbody>
        </table>
    </>
}
export default Course