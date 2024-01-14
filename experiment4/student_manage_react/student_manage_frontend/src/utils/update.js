import axios from "axios";
import selectFunc from "./select";
const updateFunc = (updateUrl, selectUrl, setNewlist, obj) => {
    axios({
        url: updateUrl,
        params: obj
    }).then(result => {
        alert(result.data)
        selectFunc(selectUrl, setNewlist)
    })
        .catch(err => console.log(err))
}
export default updateFunc;