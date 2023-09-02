import React from 'react'
import { Outlet } from 'react-router-dom';

const CoachPage = (props) => {
    props.mainPageChanged(false)

    return (
        <>
            <div>Transport osobowy</div>
            {/* <Outlet /> */}
        </>
    )
}

export default CoachPage;