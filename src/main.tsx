import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('body')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
