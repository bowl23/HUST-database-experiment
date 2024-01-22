import { useEffect, useState } from "react"
import axios from "axios"

import Header from "../../components/headers/Header"

import selectFunc from "../../utils/select"

const selectUrl = 'http://localhost:3000/api/statistics/cs'
const Statistics = () => {
    const [newlist, setNewlist] = useState([])
    useEffect(() => {
        selectFunc(selectUrl, setNewlist)
    }, [])
    return <>
        <Header></Header>
        <table className="dataList">
            <thead>
                <tr className="tableHead">
                    {['院系', '平均成绩', '最高成绩', '最低成绩',].map(item =>
                        <td key={item}>{item}</td>
                    )}
                </tr>
            </thead>
            <tbody className="tableBody">
                {newlist.map(item =>
                    <tr key={item.sdeption}>
                        <td>{item.sdeption}</td>
                        <td>{item.avg}</td>
                        <td>{item.max}</td>
                        <td>{item.min}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}
export default Statistics