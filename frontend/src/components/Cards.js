import React from 'react';
import CardItem from './CardItem';
import './Styles/Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these awesome articles</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="http://runkaruindrek.ikt.khk.ee/React/images/pexels-photo-45708.jpeg"
                            text="At what age should you teach your kids about the importance of loans."
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="http://runkaruindrek.ikt.khk.ee/React/images/pexels-photo-351264.jpeg"
                            text="Money laundering, is it for you?"
                            label="money laundering"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="http://runkaruindrek.ikt.khk.ee/React/images/pexels-photo-730564.jpeg"
                            text="Cryptocurrency, the way of the future."
                            label="Money laundering"
                            path="/services"
                        />
                        <CardItem 
                            src="http://runkaruindrek.ikt.khk.ee/React/images/pexels-photo-684387.jpeg"
                            text="Are you unable to distinguish between right and wrong?"
                            label="Job options"
                            path="/services"
                        />
                        <CardItem 
                            src="http://runkaruindrek.ikt.khk.ee/React/images/pexels-photo-3801497.jpeg"
                            text="How to balance your extreme lifestyle with your family needs."
                            label="Insurance"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
