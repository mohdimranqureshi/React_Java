'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link} from 'react-router';

class About extends React.Component {
	   render() {
	      return (
	    		  <div>
	    		  <div>
					<Link to = "/demoReact/" className = " glyphicon glyphicon-arrow-left">Back</Link>
			</div>
	         <h1>This is About Page...</h1></div>
	      )
	   }
	}

export default About;