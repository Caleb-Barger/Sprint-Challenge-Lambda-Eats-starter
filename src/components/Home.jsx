import React from 'react'
import {useHistory} from 'react-router-dom'
import './Home.css'

const Home = props => {
    const history = useHistory()

    const pushPizzaPath = evt => {
        evt.preventDefault()
        history.push('/pizza')
    }
    const pushHomePath = evt => {
        evt.preventDefault()
        history.push('/')
    }

    return (
        <div className="home-container">
            <div className="header">
                <h1>Lambda Eats</h1>
            </div>
            <div className="navbar">
                <button onClick={pushHomePath}>Home</button>
                <button onClick={pushPizzaPath}>Start Your Order</button>
            </div>
            <img 
                className="pizza-banner"
                src="http://personal.psu.edu/byh5105/images/headerpizza.jpg"
                alt="pizza banner"
            />
            <div className="line-break"/>
            <div className="what-people-r-saying">
                <img
                    className="pizza-frame"
                    src="https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200.jpg"
                    alt="pizza frame"
                />
                <div className="comments">
                    <h3>What People are Saying</h3>
                    <p>"Probably the best damn pizza I've ever had the privllageto chew on." - Gordon Ramsy</p>
                    <p>"Beats me everytime" - Bobby Flay</p>
                    <p>"I'd kill my own father for just a bite" - Adam Driver</p>
                </div>
            </div>
            <div className="line-break"/>
            <div className="what-people-r-saying">
                <div className="comments">
                    <p>"Probably the best damn pizza I've ever had the privllageto chew on." - Gordon Ramsy</p>
                    <p>"Beats me everytime" - Bobby Flay</p>
                    <p>"I'd kill my own father for just a bite" - Adam Driver</p>
                </div>
                <img
                    className="pizza-frame"
                    src="https://miro.medium.com/max/1920/1*qmR0oQ2PXkwE6w4JYWXb-Q.jpeg"
                    alt="pizza frame"
                />
            </div>
            <div className="line-break"/>
        </div>
    )
}

export default Home