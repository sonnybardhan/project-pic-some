import React, { useState, Fragment, useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';

export default function Image({ className, img }) {
	const { toggleIsFavorite } = useContext(Context);
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

	const heartIcon = img.isFavorite ? (
		<i className="ri-heart-fill favorite" onClick={handleToggleFavorite} />
	) : (
		hovered && <i className="ri-heart-line favorite" onClick={handleToggleFavorite} />
	);

	const plusIcon = hovered && <i className="ri-add-circle-line cart" />;

	return (
		<div className={`${className} image-container`} onMouseEnter={onHover} onMouseLeave={onLeave}>
			{heartIcon}
			{plusIcon}
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
