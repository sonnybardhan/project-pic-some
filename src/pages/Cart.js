import React, { useState, useContext } from 'react';
import CartItem from '../components/CartItem';
import { Context } from '../Context';
function Cart() {
	const { cartItems, emptyCart } = useContext(Context);
	const [ btnDisplay, setBtnDisplay ] = useState('Place Order');
	const totalCost = cartItems.length * 5.99;
	const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const cartItemElements = cartItems.map((item) => <CartItem key={item.id} item={item} />);

	const handlePlaceOrder = () => {
		if (cartItems.length) {
			console.log(cartItems);

			setBtnDisplay('Ordering ... ');

			setTimeout(() => {
				emptyCart();
				setBtnDisplay('Place Order');
				console.log(cartItems);
			}, 3000);
		}
	};

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className="total-cost">Total: {totalCostDisplay}</p>
			<div className="order-button">
				{cartItems.length ? (
					<button onClick={handlePlaceOrder}>{btnDisplay}</button>
				) : (
					<p>Your cart is empty.</p>
				)}
			</div>
		</main>
	);
}

export default Cart;
