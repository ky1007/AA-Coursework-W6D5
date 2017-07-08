import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './frontend/weather';
import Clock from './frontend/clock';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	// const rootA = document.getElementById("rootA");
	ReactDOM.render(<div><Clock /><Weather /></div>, root);
});
