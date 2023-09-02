import '../css/Contact.css'

import React from 'react'

const ContactPage = (props) => {
    props.mainPageChanged(false)

    return (
        <div className='contact'>
            <h2 className='contact__title section-title'><span>Kontakt</span></h2>
            <div className="contact__data">
                <div className="contact__company">
                    <p className='contact__data-title title'><span>Dane firmy:</span></p>
                    <p className='contact__data-name'>Mar-<span>Bus</span></p>
                    <p>ul. Górnicza 43</p>
                    <p>43-502 Czechowice-Dziedzice</p>
                    <div className="contact__data-numbers">
                        <p>NIP</p>
                        <p>REGON</p>
                        <p>KRS</p>
                    </div>
                </div>

                <div className="contact__data-phone">
                    <p className='title'><span>Kontakt z naszą firmą:</span></p>
                    <a href='tel: +48666666666' className='icon mobile'>+48 666 666 666</a>
                    <a href="mail: kontakt@marbus.pl" className='icon envelope'>kontakt@marbus.pl</a>
                </div>

                <div className="contact__data-address">
                    <p className='address-title title'><span>Nasza siedziba:</span></p>
                    <div className="contact__data-inner-address">
                        <div className="icon location"></div>
                        <div className="address">
                            <a href="https://goo.gl/maps/pRjes7B7NSG6Up659" target={'_blank'}>ul. Górnicza 43</a>
                            <a href="https://goo.gl/maps/pRjes7B7NSG6Up659" target={'_blank'}>43-502 Czechowice-Dziedzice</a>
                        </div>
                    </div>
                </div>

                <div className="contact__data-hours">
                    <p className='title'><span>Godziny otwarcia:</span></p>
                    <p className='days'>Poniedziałek - Piątek</p>
                    <p className='hours'><span className='icon clock'></span>9<sup>00</sup> - 17<sup>00</sup></p>
                </div>
            </div>

            <div className="contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5135.597128722949!2d19.03502128052133!3d49.94012086580979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2791dc07c61164ff!2sMar-Bus%20Marek%20Ogrodzki%20Handel%20i%20Us%C5%82ugi!5e0!3m2!1spl!2spl!4v1667577690670!5m2!1spl!2spl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactPage;