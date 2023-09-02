import '../css/About.css'

import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../img/pexels-osmany-mederos-12709204.jpg'
import img2 from '../img/pexels-artem-podrez-5025664.jpg'
import img3 from '../img/pexels-cottonbro-studio-4488636.jpg'
import img4 from '../img/pexels-mídia-4116193.jpg'

const AboutPage = (props) => {
    props.mainPageChanged(false)
    return (
        <section className='about'>
            <h2 className='about__main-title'>O firmie Mar-Bus</h2>
            <article className='about__paragraph'>
                <h3 className='about__paragraph-title'>I sekcja o firmie</h3>
                <p className='about__paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iure, asperiores amet quae temporibus nisi quasi eum impedit ad culpa voluptatum placeat autem iusto eius a aperiam possimus dolorum mollitia quia. Corrupti ratione alias adipisci, voluptatibus, quam earum minus saepe nesciunt dolorum mollitia dolore? Excepturi veniam dicta itaque tempora quos!</p>
                <div className="about__paragraph-image">
                    <img src={img3} alt="" />
                </div>
            </article>
            <article className='about__paragraph'>
                <h3 className='about__paragraph-title'>II sekcja o firmie</h3>
                <p className='about__paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iure, asperiores amet quae temporibus nisi quasi eum impedit ad culpa voluptatum placeat autem iusto eius a aperiam possimus dolorum mollitia quia. Corrupti ratione alias adipisci, voluptatibus, quam earum minus saepe nesciunt dolorum mollitia dolore? Excepturi veniam dicta itaque tempora quos!</p>
                <div className="about__paragraph-image">
                    <img src={img1} alt="" />
                </div>
            </article>
            <article className='about__paragraph'>
                <h3 className='about__paragraph-title'>III sekcja o firmie</h3>
                <p className='about__paragraph-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iure, asperiores amet quae temporibus nisi quasi eum impedit ad culpa voluptatum placeat autem iusto eius a aperiam possimus dolorum mollitia quia. Corrupti ratione alias adipisci, voluptatibus, quam earum minus saepe nesciunt dolorum mollitia dolore? Excepturi veniam dicta itaque tempora quos!</p>
                <div className="about__paragraph-image">
                    <img src={img4} alt="" />
                </div>
            </article>
            <div className="about__us">
                <h3 className='about__us-title'>Poznaj nasz zespół</h3>
                <div className="about__us-slider">
                    <img src={img2} alt="" />
                </div>
                <Link to='/' className='about__us-link'>My...</Link>
            </div>
        </section>
    )
}

export default AboutPage;