import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
    return (
        <Link to='/pizza'>
            <button>RENDER PIZZA COMPONENT</button>
        </Link>
    )
}

export default Home