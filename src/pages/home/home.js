import React from 'react';

import Welcome from '../../components/welcome/welcome';
import About from '../../components/about/about';
import HomeProduct from '../../components/home-product/home-product';
import HowItWork from '../../components/how-it-work/how-it-work';

const Home = () => (

    <div className="container">

        <Welcome/>
        <About/>
        <HomeProduct/>
        <HowItWork/>

    </div>

)

export default Home;