import React, { useState, useEffect } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
	const [ photos, setPhotos ] = useState([]);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	// return <Provider value={{ photos }}>{props.children}</Provider>;
	return <Context.Provider value={{ photos }}>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
