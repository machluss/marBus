import '../css/Call-Btn.css'

import React from 'react'

const CallBtn = () => {
    return (
        <div className="call-btn">
            <a href="tel: +48666666666"><span className='icon phone'></span><span className='call-btn__call'>Zadzwoń</span></a>
        </div>)
}

export default CallBtn;