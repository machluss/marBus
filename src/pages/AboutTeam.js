import '../css/About.css'

import React from 'react'
import { Link } from 'react-router-dom'

const AboutTeam = (props) => {
    props.mainPageChanged(false)
    return (
        <section className='aboutTeam'>
            Nasz zespół:
        </section>
    )
}

export default AboutTeam;