import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to='/pizza'>
                <button>RENDER PIZZA COMPONENT</button>
            </Link>
        </div>
    )
}

export default Home