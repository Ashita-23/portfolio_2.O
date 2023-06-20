import "./NetworkStatus.css"

const NetworkStatus  = () =>{
    return(<div className="status-outer">
        <div className="status-inner">
            <h1 className="status-title">Oops!</h1>
            <h1 className="status-text">Your network connection is gone...</h1>
        </div>
    </div>)
}

export default NetworkStatus