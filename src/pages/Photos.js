import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from '../components/Image';
import { getClass } from '../utils';

function Photos() {
	const { photos } = useContext(Context);

	const imageArray = photos.map((photo, index) => <Image key={photo.id} img={photo} className={getClass(index)} />);

	return <main className="photos">{imageArray}</main>;
}

export default Photos;
