import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

export default function CartItem({ item }) {
	const [ hover, toggleHover ] = useHover();

	const { removeItem } = useContext(Context);

	const onHover = () => {
		toggleHover();
	};

	const onLeave = () => {
		toggleHover();
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
