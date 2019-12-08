import React from 'react';
import './home-product.css';
import Button from '../button/button';
import Box from '../box/box';

const HomeProduct = () => (
    <div className="hp-container">
        <section className="hp-wrapper">

            <article className="hp-article">
                <header>
                    <h2>Our products</h2>
                    <Button secondary>More books</Button>
                </header>
                
                <div className="hp-product-wrapper">
                    <Box>
                        <div className="hp-product">
                            <div className="hp-img-wrapper">
                                <figure className="hp-product-img">
                                    <img src="book-mockup.png" alt="book"/>
                                </figure>
                            </div>
                            <section className="hp-get-book">

                                <h3>The book</h3>
                                <p className="hp-price">19.99$</p>
                                <div className="hp-get-btn">
                                    <Button>More books</Button>
                                </div>
                            </section>
                        </div>
                    </Box>
                </div>

            </article>
        </section>
    </div>
)

export default HomeProduct;