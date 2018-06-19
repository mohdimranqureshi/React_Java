'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './app.js';
import About from './about.js';
import Header from './header.js';
import Contact from './contact.js';

ReactDOM.render(
		<Router history={browserHistory} >
		
		  <Route path="/demoReact/" component={Header} />
		  <Route path="react/home" component={App}  />
		  <Route path="react/contact" component={Contact}  />
		  <Route path="react/about" component={About}  />
		  </Router>,
	document.getElementById('react')
)
