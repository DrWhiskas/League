import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import SignIn from './page/SignIn';
import Home from './page/Home';

import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/localisation/:id" element={<Logements />} />
				<Route path="*" element={<Error />} />
*/