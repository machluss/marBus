import '../css/Home.css'

import React from "react";
import { NavLink } from "react-router-dom";

import Home__Banner from "../components/HomeBanner";

const HomePage = (props) => {

    props.mainPageChanged(true)

    return (
        <>
            <div className="home__desktop-menu">
                <div className="home__desktop-pages">
                    <NavLink
                        className='home__desktop-link --about'
                        to='/about'
                    >O nas</NavLink>
                    <div className="home__desktop-link --logo">
                        <NavLink
                            to='/'
                        >Mar-<span>Bus</span></NavLink>
                    </div>
                    <NavLink
                        className='home__desktop-link --contact'
                        to='/contact'
                    >Kontakt</NavLink>
                </div>
                <div className="home__desktop-media">
                    <a href="http://www.facebook.pl" target={'_blank'} className='icon facebook'></a><a href="www.tweeter.pl" target={'_blank'} className='icon twitter'></a><a href="www.youtube.pl" target={'_blank'} className='icon youtube'></a>
                </div>
            </div>
            <Home__Banner />
        </>
    )
}

export default HomePage;