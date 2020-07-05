import React, { useContext, useState } from 'react';
import { Context } from '../Context';
export default function CartItem({ item }) {
	const [ hover, setHover ] = useState(false);

	const { removeItem } = useContext(Context);

	const onHover = () => {
		setHover(true);
	};

	const onLeave = () => {
		setHover(false);
	};

	const handleRemove = () => {
		removeItem(item.id);
	};

	const tIcon = hover ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

	return (
		<div className="cart-item">
			<i className={tIcon} onClick={handleRemove} onMouseEnter={onHover} onMouseLeave={onLeave} />
			<img src={item.url} width="130px" />
			<p>$5.99</p>
		</div>
	);
}
