import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
function Header() {
	return (
		<header>
			<h2>
				<Link to="/">Pic Some</Link>
			</h2>
			<Link to="/cart">
				<i className="ri-shopping-cart-line ri-fw ri-2x" />
			</Link>
		</header>
	);
}

export default Header;
