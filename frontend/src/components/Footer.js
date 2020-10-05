import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'

import './Styles/Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to recieve our best investment deals.
                </p>
                <p className="footer-subscription-text">
                    Join the adventure.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">Answers to difficult questions</Link>
                        <Link to="/">Contacts</Link>
                        <Link to="/sign-up">Branches, ATM,s</Link>
                        <Link to="/">Book a time</Link>
                        <Link to="/sign-up">About Leht-Rünkaru pank</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Useful links</h2>
                        <Link to="/sign-up">Sustainability</Link>
                        <Link to="/">Currency calculator</Link>
                        <Link to="/sign-up">Prices & rates</Link>
                        <Link to="/">Work with us</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Juridicial info</h2>
                        <Link to="/sign-up">Bank conditions</Link>
                        <Link to="/">Processing of client data</Link>
                        <Link to="/sign-up">Customer data</Link>
                        <Link to="/">Open banking</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Client programs</h2>
                        <Link to="/sign-up">Private banking</Link>
                        <Link to="/">Gold customers</Link>
                        <Link to="/sign-up">Seniors</Link>
                        <Link to="/">For parents</Link>
                        <Link to="/sign-up">Young people and students</Link>
                        <Link to="/">Money-laundering</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                    LRP
                    <i class="fas fa-hand-holding-usd"></i> 
                    </Link>
                </div>
                <small class='website-rights'>LRP © 2020</small>
                    <div class='social-icons'>
                        <Link
                        class='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fab fa-instagram' />
                        </Link>
                        <Link
                        class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

