import React from 'react';
import { Container } from './App.styles';
import GlobalStyle from './styles/globals';

import Header from './components/Header';
import CurrentInfo from './components/CurrentInfo';

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<CurrentInfo />
			</Container>
		</>
	);
}

export default App;
