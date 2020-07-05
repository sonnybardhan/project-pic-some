import React from 'react';

export default function Image({ className, img }) {
	console.log(img.url);
	return (
		<div className={`${className} image-container`}>
			<img src={img.url} alt="" className="image-grid" />
		</div>
	);
}
