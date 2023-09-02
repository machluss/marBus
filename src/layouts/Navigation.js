import React from "react";
import { NavLink, Link } from "react-router-dom";

import '../css/Navigation.css';

const Navigation = (props) => {
    const navPages = [
        {
            link: '/',
            icon: 'home',
            text: 'Home',
            nested: []
        },
        {
            link: '/about',
            icon: '',
            text: 'O nas',
            nested: []
        },
        {
            link: '/coach',
            icon: '',
            text: 'Transport osobowy',
            nested: [
                {
                    link: 'cars',
                    icon: '',
                    text: 'Samochody'
                },
                {
                    link: 'disabled',
                    icon: '',
                    text: 'Transport os. niepełnosprawnych'
                }
            ]
        },
        {
            link: '/cargo',
            icon: '',
            text: 'Transport towarowy',
            nested: [
                {
                    link: 'offer',
                    icon: '',
                    text: 'Oferta'
                },
                {
                    link: 'cars',
                    icon: '',
                    text: 'Samochody'
                }
            ]
        },
        {
            link: '/service',
            icon: '',
            text: 'Serwis',
            nested: [
                {
                    link: 'offer',
                    icon: '',
                    text: 'Oferta'
                },
                {
                    link: 'gallery',
                    icon: '',
                    text: 'Galeria'
                }
            ]
        },
        {
            link: '/inspection',
            icon: '',
            text: 'Stacja Kontroli Pojazdów',
            nested: [
                {
                    link: 'offer',
                    icon: '',
                    text: 'Oferta'
                },
                {
                    link: 'gallery',
                    icon: '',
                    text: 'Galeria'
                }
            ]
        },
        {
            link: '/contact',
            icon: '',
            text: 'Kontakt',
            nested: []
        }
    ]

    // window.addEventListener('scroll', () => {
    // if (window.scrollY > 0.2 * window.outerHeight) document.querySelector('.topNavigation').classList.remove('hide')
    // else document.querySelector('.topNavigation').classList.add('hide')
    // })

    return (
        <div className={`topNavigation --mobile ${props.isMain ? 'hide' : ''}`}>
            <NavLink to={'/'} className="topNavigation__logo">Mar-<span>Bus</span></NavLink>
            <button
                className="topNavigation__show-btn icon bars"
                onClick={() => document.querySelector('.topNavigation__menu').classList.add('active')}
            ></button>

            <nav className="topNavigation__menu">
                <button
                    className="topNavigation__close-btn icon close"
                    onClick={() => document.querySelector('.topNavigation__menu').classList.remove('active')}
                ></button>
                <p className="topNavigation__title">Menu</p>
                <div className="topNavigation__pages">
                    {navPages.map((page, index) => {
                        if (page.nested.length === 0) {
                            return (<NavLink
                                key={index}
                                to={page.link}
                                className={`topNavigation__page ${page.icon ? 'icon ' + page.icon : ''} ${index === navPages.length - 1 ? '--last' : ''}`}
                                onClick={() => document.querySelector('.topNavigation__menu').classList.remove('active')}
                            >{page.icon ? null : page.text}</NavLink>)
                        } else {
                            return (
                                <div
                                    key={index}
                                    className='topNavigation__page'
                                >
                                    <NavLink
                                        to={page.link}
                                        onClick={() => {
                                            console.log('Out Click')
                                            document.querySelector('.topNavigation__menu').classList.remove('active')
                                        }}
                                    >{page.text}</NavLink>
                                    <button
                                        className="topNavigation__forward-btn icon right"
                                        onClick={() => document.querySelector(`[data-top-navigation-nasted-page='${page.link}']`).classList.add('active')}
                                    ></button>

                                    <div
                                        className="topNavigation__pages nasted"
                                        data-top-navigation-nasted-page={page.link}
                                    >
                                        <button
                                            className="topNavigation__backward-btn icon left"
                                            onClick={() => document.querySelector(`[data-top-navigation-nasted-page='${page.link}']`).classList.remove('active')}
                                        ></button>
                                        <p className="topNavigation__nasted-title">{page.text}</p>
                                        {page.nested.map((nestedPage, index) => (<Link
                                            key={index}
                                            to={`${page.link}/${nestedPage.link}`}
                                            className='topNavigation__page nasted'
                                            onClick={() => {
                                                console.log('In Click')
                                                if (window.innerWidth < 1024) {
                                                    document.querySelector('.topNavigation__menu').classList.remove('active')
                                                    document.getElementsByClassName('topNavigation__pages active')[0].classList.remove('active')
                                                    console.log(document.getElementsByClassName('topNavigation__pages active'))

                                                }
                                            }}
                                        >{nestedPage.text}</Link>))}
                                    </div>
                                </div>
                            )
                        }
                    }
                    )}
                    <div className="topNavigation__media">
                        <a href="http://www.facebook.pl" target={'_blank'} className='icon facebook'></a><a href="www.tweeter.pl" target={'_blank'} className='icon twitter'></a><a href="www.youtube.pl" target={'_blank'} className='icon youtube'></a>
                    </div>
                </div>
                <div className="topNavigation__call">
                    <p>Zadzwoń</p>
                    <a href="tel: +48666666666"><span className="icon phone"></span>+48 666 666 666</a>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;


/* <button
    className="topNavigation__close-btn icon close"
    onClick={() => {
        document.querySelector('.topNavigation__pages.active').classList.remove('active')

        document.querySelector('.topNavigation__menu').classList.remove('active')
    }
    }
></button> */