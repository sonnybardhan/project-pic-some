import React, { useState, Fragment } from 'react';

export default function Image({ className, img }) {
	const [ hovered, setHovered ] = useState(false);

	const onHover = () => {
		setHovered(true);
	};
	const onLeave = () => {
		setHovered(false);
	};

	const displayIcons = () => {
		return hovered ? (
			<Fragment>
				<i className="ri-heart-line favorite" /> <i className="ri-add-circle-line cart" />
			</Fragment>
		) : (
			''
		);
	};

	return (
		<div className={`${className} image-container`}>
			{displayIcons()}
			<img src={img.url} alt="" className="image-grid" onMouseEnter={onHover} onMouseLeave={onLeave} />
		</div>
	);
}
