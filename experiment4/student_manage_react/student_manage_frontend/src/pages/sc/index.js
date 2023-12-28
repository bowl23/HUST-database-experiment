import Func from "../../components/headers/Func"
import Header from "../../components/headers/Header"

const Sc = () => {
    return <>
        <Header></Header>
        <Func></Func>
        <div class="center">
            <label>学号</label>
            <input type="text" name="Sno" id="Sno" />
            <label >课程号</label>
            <input type="text" name="Cno" id="Cno" />
            <label >成绩</label>
            <input type="text" name="Grade" id="Grade" />
        </div>

        <table class="dataList">
            <tr class="tableHead"></tr>
            <tbody class="tableBody"></tbody>
        </table>
    </>
}
export default Sc
