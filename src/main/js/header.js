'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class Header extends React.Component {
	   render() {
	      return (
	         <nav>
	               <Link to="react/home" className = "button glyphicon glyphicon-home" title = "Home">Home</Link>
	               <Link to = "react/about" className = "button glyphicon glyphicon-file" title = "About">About</Link>
	               <Link to = "react/contact" className = "button glyphicon glyphicon-user" title = "Contact">Contact</Link>
	         </nav>
	      )
	   }
	}

export default Header;