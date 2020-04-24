import React from 'react'
import {Link} from 'react-router-dom'

const SucsessSubmission = props => {
    return (
        <div>   
            <h1>ORDER RECIVED</h1>
            <img 
            src='https://media1.giphy.com/media/3ohryAogR70cGryqxW/giphy.gif?cid=ecf05e47be5254d2d949de15c7d71ecf244ad1aade96580c&rid=giphy.gif'
            alt='ORDER CONFIRMED!!'
            />
            <br />
            <Link to='/'>
                <button>Go Home</button>
            </Link>
            <Link to='/pizza'>
                <button>New Order</button>
            </Link>
        </div>
    )
}

export default SucsessSubmission