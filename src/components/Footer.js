import React from 'react';
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
	FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='card-footer'>
			<FaTwitterSquare className='icon' />
			<FaFacebookSquare className='icon' />
			<FaInstagramSquare className='icon' />
			<FaGithubSquare className='icon' />
		</footer>
	);
};

export default Footer;
