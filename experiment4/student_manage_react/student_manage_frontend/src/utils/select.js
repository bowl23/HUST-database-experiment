import axios from "axios"
const selectFunc = (url, setNewlist) => {
    axios({
        url: url
    }).then(result => {
        setNewlist(result.data)
        console.log(result.data);
    })
}
export default selectFunc