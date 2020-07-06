import React, { useState } from 'react';

export default function useHover(initVal = false) {
	const [ state, setState ] = useState(initVal);

	const toggleState = () => {
		setState((prev) => !prev);
	};

	return [ state, toggleState ];
}
