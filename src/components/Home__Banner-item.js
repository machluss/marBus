import React from 'react'
import { Link } from 'react-router-dom';

const Home__BannerItem = (props) => {

    return (
        <div className={`home__banner-item ${props.active ? 'active' : ''} ${props.item.modifier ? props.item.modifier : ''}`} >
            <div
                className="home__item-inner"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + props.item.image})`
                }}
            >
                <p>{props.item.text}</p>
                <button className='home__item-more'><Link to={props.item.link}>Więcej...</Link></button>
            </div>
        </div>
    )
}

export default Home__BannerItem;