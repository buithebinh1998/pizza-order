import React from 'react'
import './LoadingPage.css'

const LoadingPage = () => {
    return(
        <div className="loading-page">
            <div style={{fontSize:'30px', fontWeight:'bold', color:'#033a56'}}>Loading...</div>
            <div className="loader"></div>
        </div>
    )
}

export default LoadingPage;