import '../css/Footer.css'

import React from "react";
import { Link } from 'react-router-dom';

const links = [
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

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer__slogan">
                <div className="footer__logo">
                    <p>Mar-<span>Bus</span></p>

                </div>
                <div className="footer__slogan-text">
                    <p>Na szybko czy jest firma Mar-Bus i jak fajnym miejscem jest.</p>
                </div>
            </div>

            <div className="footer__data-wrapper">
                <div className='footer__contact'>
                    <div className="footer__address">
                        <div className="icon location"></div>
                        <div className="address">
                            <a href="https://goo.gl/maps/pRjes7B7NSG6Up659" target={'_blank'}>ul. Górnicza 43</a>
                            <a href="https://goo.gl/maps/pRjes7B7NSG6Up659" target={'_blank'}>43-502 Czechowice-Dziedzice</a>
                        </div>
                    </div>
                    <div className="footer__media">
                        <a href="http://www.facebook.pl" target={'_blank'} className='icon facebook'></a><a href="www.tweeter.pl" target={'_blank'} className='icon twitter'></a><a href="www.youtube.pl" target={'_blank'} className='icon youtube'></a>
                    </div>
                    <div className='footer__hmmm'>
                        <a href='tel: +48666666666' className='icon mobile'>+48 666 666 666</a>
                        <a href="mail: kontakt@marbus.pl" className='icon envelope'>kontakt@marbus.pl</a>
                    </div>

                </div>

                <div className="footer__menu">
                    <p>Na skróty:</p>
                    {links.map((link, index) => <Link
                        to={link.link}
                        key={index}
                        onClick={() => {
                            window.scrollTo(0, 0)
                            // console.log(link.link !== '/')
                            // console.log(link)
                            // if (link.link !== '/') props.mainPageChanged(false)
                            // else props.mainPageChanged(true)
                        }}
                    ><span className='icon right'></span>{link.text}</Link>)}
                </div>
            </div>
            <div className="footer__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5135.597128722949!2d19.03502128052133!3d49.94012086580979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2791dc07c61164ff!2sMar-Bus%20Marek%20Ogrodzki%20Handel%20i%20Us%C5%82ugi!5e0!3m2!1spl!2spl!4v1667577690670!5m2!1spl!2spl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="footer__copyright">
                <p>Projekt i wykonanie: <a href='https://www.cyslaw.pl' target={'_blank'}><span className='cyslaw__first_letter'>C</span>yslaw.pl</a></p>
                <p><span className='icon copyright'></span> Copyright 2022 | Mar-Bus</p>
            </div>
        </div>
    )
}

export default Footer;