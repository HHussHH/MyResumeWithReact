import './loading.scss'
import loadingGif from "../../img/loadingGif.gif"
//this is just a fake upload to showcase my skills
const Loading = ({ setLoading }) => {
    const loadingActive = setTimeout(() => {
        setLoading(false)
    }, 400)


    return (
        <div style={{ textAlign: "center" }}>
            <img src={loadingGif} alt="" />
            {loadingActive}
        </div>
    )
}

export default Loading