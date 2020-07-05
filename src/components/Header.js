import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import '../styles.css';

function Header() {
	const { cartItems } = useContext(Context);

	const hasItems = cartItems.length > 0;

	return (
		<header>
			<h2>
				<Link to="/">Pic Some</Link>
			</h2>
			<Link to="/cart">
				<i className={hasItems ? 'ri-shopping-cart-fill ri-fw ri-2x' : 'ri-shopping-cart-line ri-fw ri-2x'} />
			</Link>
		</header>
	);
}

export default Header;
