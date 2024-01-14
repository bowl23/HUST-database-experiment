import axios from "axios"
const select = (url, setNewlist) => {
    axios({
        url: url
    }).then(result => {
        setNewlist(result.data)
    })
}
export default select