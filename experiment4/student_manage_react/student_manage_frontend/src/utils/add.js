import axios from "axios";
import selectFunc from "./select";
const addFunc = (addUrl, selectUrl, setNewlist, addObj) => {
    axios({
        url: addUrl,
        params: addObj
    }).then(result => {
        alert(result.data)
        selectFunc(selectUrl, setNewlist)
    }).catch(err => console.log(err))
}
export default addFunc