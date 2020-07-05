import React, { useState, useEffect } from 'react';
const { Provider, Consumer } = React.createContext();

function ContextProvider(props) {
	const [ photos, setPhotos ] = useState([]);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then((res) => res.json())
			.then(setPhotos);
	}, []);
	console.log(photos);

	return <Provider value={{ photos }}>{props.children}</Provider>;
}

export { ContextProvider, Consumer as ContextConsumer };
