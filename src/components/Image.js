import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';

export default function Image({ className, img }) {
	const { toggleIsFavorite, addItem, cartItems, removeItem } = useContext(Context);
	const [ hovered, setHovered ] = useState(false);

	const onHover = () => {
		setHovered(true);
	};
	const onLeave = () => {
		setHovered(false);
	};

	const handleToggleFavorite = () => {
		toggleIsFavorite(img.id);
	};

	const handleAddItem = () => {
		addItem(img);
	};

	const handleRemoveItem = () => {
		removeItem(img.id);
	};

	const heartIcon = img.isFavorite ? (
		<i className="ri-heart-fill favorite" onClick={handleToggleFavorite} />
	) : (
		hovered && <i className="ri-heart-line favorite" onClick={handleToggleFavorite} />
	);

	const plusIcon = () => {
		const item = cartItems.some((item) => item.id === img.id);
		if (item) {
			return <i className="ri-add-circle-fill cart" onClick={handleRemoveItem} />;
		} else {
			return hovered && <i className="ri-add-circle-line cart" onClick={handleAddItem} />;
		}
	};

	return (
		<div className={`${className} image-container`} onMouseEnter={onHover} onMouseLeave={onLeave}>
			{heartIcon}
			{plusIcon()}
			<img src={img.url} alt="" className="image-grid" />
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool
	})
};
