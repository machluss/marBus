import React from 'react'
import { Outlet } from 'react-router-dom';

const CargoPage = (props) => {
    props.mainPageChanged(false)

    return (
        <>
            <div>Transport międzynarodowy</div>
            <Outlet />
        </>
    )
}

export default CargoPage;