import React from 'react'
import './LoadingPage.css'

const Spinner = () => {
    return(
        <div className="loading-page">
            <div className="loader" style={{borderTop: "16px solid purple"}}></div>
        </div>
    )
}

export default Spinner;