import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className="navbar">
			<Link to="#" style={{color:"green"}} > Indicator Strategies</Link>
			<Link to="#" style={{color:"white"}}>Candlestick patterns</Link>
			<Link to="#" style={{color:"white"}}>Crypto Strategies</Link>
			<Link to="#" style={{color:"white"}}>Social Trading (Coming soon..)</Link>
		</div>
	);
};

export default NavBar;
