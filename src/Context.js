import React, { useState, useEffect } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
	const [ photos, setPhotos ] = useState([]);

	const toggleIsFavorite = (id) => {
		const updatedPhotos = photos.map((photo) => {
			if (photo.id === id) {
				return { ...photo, isFavorite: !photo.isFavorite };
			}
			return photo;
		});
		setPhotos(updatedPhotos);
	};

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	return <Context.Provider value={{ photos, toggleIsFavorite }}>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
