import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import App from './components/app';

document.addEventListener("DOMContentLoaded", () => {

  const preloadedState = {
    history: []
  };
  const store = configureStore(preloadedState);
	window.store = store;
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root);

	// const app = document.getElementById("app");
	// ReactDOM.render(<App store={store}/>, app);

});
