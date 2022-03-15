import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import TextForm from './TextForm';

export default function Navigation() {
	return (
		<Routes>
			<Route exact path="/" element={<TextForm />} />
			<Route exact path="About" element={<About />} />
		</Routes>
	);
}
