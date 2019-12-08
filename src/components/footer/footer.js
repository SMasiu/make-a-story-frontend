import React from 'react';
import './footer.css';
import List from '../list/list';

const Footer = () => (
    <footer className="main-footer">
        <section className="footer-content">
            <h2>Conact</h2>

            <div className="footer-sect-wrapper">
                <article className="contact-info">
                    <div>
                        <h3>Adress</h3>
                        <List items={['some street 10/25']}/>
                    </div>
                    <div>
                        <h3>Open hours</h3>
                        <List items={['Mon - Fir: 8:00am - 3pm','Sat - Sun: 8:00am - 11am']}/>
                    </div>
                    <div>
                        <h3>Contact us</h3>
                        <List items={['email: makeastory@gmail.com','phone: 503 294 492']}/>
                    </div>
                    <div>
                        <h3>FAQ</h3>
                        <List items={[
                            "What i'll get for creating fragments",
                            'How to buy a book',
                            'Whre i can find the stories'
                        ]}/>
                    </div>
                </article>
                <form>

                </form>
            </div>
            <div className="footer-bootom">
                <p>&copy; Make a story 2019</p>
            </div>
        </section>
    </footer>
)

export default Footer;