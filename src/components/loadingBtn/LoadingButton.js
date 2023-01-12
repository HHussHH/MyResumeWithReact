import "./loadingBtn.scss"

const LoadingButton = ({ setText, setClick }) => {
    return (
        <button
            className="loading__btn"
            onClick={setClick}>
            {setText}
        </button >
    )
}

export default LoadingButton