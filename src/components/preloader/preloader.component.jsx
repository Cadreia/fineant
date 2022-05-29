import React from 'react'
import './preloader.styles.css'

const PreLoader = () => {
  return (
    <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
            <div className="round_spinner">
                <div className="spinner"></div>
                <div className="text">
                    <img src="img/logo/Logo-2.png" alt="" />
                </div>
            </div>
            <h2 className="head">Did You Know?</h2>
            <p></p>
        </div>
    </div>

  )
}

export default PreLoader