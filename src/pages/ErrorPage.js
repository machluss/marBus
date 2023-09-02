import '../css/Error.css';

import gif from '../img/80d9d125057237.5633e95434e6b.gif';

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
    props.mainPageChanged(false)

    return (
        <div className='error'>
            <div className="error__text">
                <p >Oooopss...</p>
                <p >Strona nie została odnaleziona... :(</p>
                <Link to='/' className='error__home --desktop'><span className='icon home'></span>Strona główna</Link>
            </div>
            <div className="error__gif">
                <img src={gif} alt="Rambo" />
            </div>
            <div className="error__link">
                <Link to='/' className='error__home --mobile'><span className='icon home'></span>Strona główna</Link>
            </div>
        </div>
    )
}

export default ErrorPage;