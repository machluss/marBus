import React from 'react'
import { Outlet } from 'react-router-dom';

const ServicePage = (props) => {
    props.mainPageChanged(false)

    return (
        <>
            <div>Serwis samochodowy</div>
            <Outlet />
        </>
    )
}

export default ServicePage;