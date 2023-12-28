import { useNavigate } from "react-router"

const Header = () => {
    const nav = useNavigate()
    const navagation = (aim) => {
        nav(`/${aim}`)
    }
    return <> <div className="top">
        <div className="student" onClick={() => navagation('student')}>学生信息</div>
        <div className="sc" onClick={() => navagation('sc')}>选课信息</div>
        <div className="course" onClick={() => navagation('course')}>课程信息</div>
        <div className="statistics" onClick={() => navagation('statistics')}> 成绩统计</div>
        <div className="personalGrade" onClick={() => navagation('personalGrade')}>个人成绩</div>
    </div >
    </>
}
export default Header