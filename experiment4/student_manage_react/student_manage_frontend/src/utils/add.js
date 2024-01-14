import axios from "axios";
import selectFunc from "./select";
const addFunc = (addUrl, selectUrl, setNewlist, addObj) => {
    console.log(addObj);
    axios({
        url: addUrl,
        params: addObj
    }).then(result => {
        alert(result.data)
        selectFunc(selectUrl, setNewlist)
    })

}
export default addFunc