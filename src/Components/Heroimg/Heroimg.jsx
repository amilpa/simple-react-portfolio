import React from 'react'

import './Style.css'

import { Link } from 'react-router-dom'

import Introimg from '../../assets/intro-bg.jpg'

const Heroimg = () => {
	return (
		<div className="hero">
			<div className="mask">
				<img src={ Introimg } alt="true" className='into-img'/>
			</div>
			<div className="content">
				<p>HI, I'M A FREELANCER.</p>
				<h1>React Developer.</h1>
				<div>
					<Link to={"/projects"} className="btn">Projects</Link>
					<Link to={"/contact"} className="btn btn-light">Contacts</Link>
				</div>
			</div>
		</div>

	)
}

export default Heroimg
