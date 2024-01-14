import axios from "axios";
import selectFunc from "./select";
const deleteFunc = (deleteUrl, selectUrl, setNewlist, obj) => {
    axios({
        url: deleteUrl,
        params: obj
    }).then(result => {
        alert(result.data)
        selectFunc(selectUrl, setNewlist)
    })
}
export default deleteFunc