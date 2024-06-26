import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home-components/Hero';
import Popular from '../components/home-components/Popular';
import Footer from '../components/Footer';


function Home() {
	return (
		<div id="home">
			<div className="hero">
				<Navbar />
				<Hero />
			</div>
			<Popular />
            <Footer />
		</div>
	);
}

export default Home;
