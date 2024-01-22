import axios from "axios";
const selectStu = (url, setNewlist, sno) => {
    console.log('selectUrl');
    axios({
        url: url,
        params: {
            Sno: sno
        }
    }).then(result =>
        console.log(result.data)
    )
}
export default selectStu