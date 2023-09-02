import React from 'react'
import { Outlet } from 'react-router-dom';

const InpectionPage = (props) => {
    props.mainPageChanged(false)

    return (
        <>
            <div>Stacja Kontroli Pojazdów</div>
            <Outlet />
        </>
    )
}

export default InpectionPage;