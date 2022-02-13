import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactBtns = () => {
	return (
		<div className='btns'>
			<button className='btn btn-primary'>
				<FaEnvelope />
				Email
			</button>
			<button className='btn btn-secondary'>
				<FaLinkedin style={{ color: 'white' }} />
				LinkedIn
			</button>
		</div>
	);
};

export default ContactBtns;
