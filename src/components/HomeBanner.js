import '../css/Home__Banner.css'

import React, { Component } from 'react'

import Home__BannerItem from './Home__Banner-item';

const bannerItems = [
    {
        image: 'home1.jpg',
        text: 'Transport osobowy',
        link: '/coach',
        modifier: '--first'
    },
    {
        image: 'home2.jpg',
        text: 'Transport towarów',
        link: '/cargo',
        modifier: ''
    },
    {
        image: 'home3.jpg',
        text: 'Stacja kontroli pojazdów',
        link: '/inspection',
        modifier: ''
    },
    {
        image: 'home4.jpg',
        text: 'Serwis',
        link: '/service',
        modifier: '--last'
    },
]

class Home__Banner extends Component {
    state = {
        items: [...bannerItems],
        activeItem: 0
    }

    handleImageDecrease = () => {
        this.setState(prevState => {
            const newState = {
                items: prevState.items,
                activeItem: prevState.activeItem === 0 ? prevState.items.length - 1 : prevState.activeItem - 1
            }
            return newState;
        })
    }

    handleImageIncrease = () => {
        this.setState(prevState => {
            const newState = {
                items: prevState.items,
                activeItem: prevState.activeItem === prevState.items.length - 1 ? 0 : prevState.activeItem + 1
            }
            return newState;
        })
    }

    render() {
        return (
            <>
                <div
                    className='home__banner'
                >
                    <div className="home__blur"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + this.state.items[this.state.activeItem].image})`

                        }}></div>
                    {bannerItems.map((item, index) => {
                        return <Home__BannerItem key={index} item={item} active={this.state.activeItem === index} />
                    })}
                    <button
                        className='home__item-left icon left'
                        onClick={this.handleImageDecrease}
                    ></button>
                    <button
                        className='home__item-right icon right'
                        onClick={this.handleImageIncrease}
                    ></button>

                </div>
            </>
        )
    }
}

export default Home__Banner;