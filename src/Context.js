import React, { useState, useEffect } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
	const [ photos, setPhotos ] = useState([]);
	const [ cartItems, setCartItems ] = useState([]);

	const addItem = (newItem) => {
		setCartItems([ ...cartItems, newItem ]);
	};

	const removeItem = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const toggleIsFavorite = (id) => {
		const updatedPhotos = photos.map((photo) => {
			if (photo.id === id) {
				return { ...photo, isFavorite: !photo.isFavorite };
			}
			return photo;
		});
		setPhotos(updatedPhotos);
	};

	const emptyCart = () => {
		setCartItems([]);
	};

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	return (
		<Context.Provider value={{ photos, toggleIsFavorite, addItem, cartItems, removeItem, emptyCart }}>
			{props.children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
