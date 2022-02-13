import React from 'react';
import About from './About';
import ContactBtns from './ContactBtns';
import Footer from './Footer';
import Info from './Info';

const profile =
	'https://res.cloudinary.com/duymkqhnm/image/upload/v1608460164/hcmwebs/hcmwebs/profiles/personal/IMG_3327_l9pp8q.jpg';

const Card = () => {
	return (
		<div className='card'>
			<div className='card-header'>
				<img src={profile} alt='profile' className='img' />
			</div>
			<div className='card-body'>
				<Info />
				<ContactBtns />
				<About />
			</div>
			<Footer />
		</div>
	);
};

export default Card;
