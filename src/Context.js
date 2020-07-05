import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();

function ContextProvider(props) {
	return <Provider value={''}>{props.children}</Provider>;
}

export { ContextProvider, Consumer as ContextConsumer };
