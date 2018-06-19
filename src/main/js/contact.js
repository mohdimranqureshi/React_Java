'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link} from 'react-router';

class Contact extends React.Component{
	
	constructor(props){
		
		super(props);
		this.state = {employees:[]};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e){
		alert('This is only for Demo. No Action is attached to this button.')
		return false;
	}
	
	loadFromServer(){
		fetch('/demoReact/getData').then(result =>result.json())
		.then(employees => this.setState({employees}));
	}
	
	componentWillMount(){
		this.loadFromServer();
	}
	
	render(){
		
		return(
				
				<div className = "tableData">
				
				<div>
							<Link to = "/demoReact/" className = " glyphicon glyphicon-arrow-left">Back</Link>
					</div>
								
				<form>
				
				<div className="form-group">
				 <label className="control-label col-sm-1">FirstName:</label>
				<input type = "text" placeholder = "firstName" className = "formField" />
						</div>
				<div className="form-group">	
				 <label className="control-label col-sm-1">LastName:</label>
				<input type = "text" placeholder = "lastName" className = "formField" /></div>
				
				<div className="form-group">
				 <label className="control-label col-sm-1">Address:</label>
				<input type = "text" placeholder = "address" className = "formField" />
							</div>
				<div className="form-group">
				 <label className="control-label col-sm-1">UserName:</label>
							<select ref="userInput" defaultValue="" required >
									    <option value="" disabled>UserName</option>
									    {
									    	this.state.employees.map(function(user) {
									        return <option key={user.employeeId}
									          value={user.firstName}>{user.firstName}</option>;
									      })
									    }
									    
					  </select>
					  </div>
					  
					  <div className="form-group">
					  
					  <label className="control-label col-sm-1.5">Technology:</label>
							 <input type="checkbox" name="java" value="Java" />Java 
		                        <input type="checkbox" name="Reactjs" value="Reactjs" />ReactJS
		               </div>
		               
		               <div className="form-group">
						  
						  <label className="control-label col-sm-1">Gender:</label>
								 <input type="radio" name="gender" value="male"  />Male 
			                        <input type="radio" name="gender" value="female"   />female
			               </div>
		               
		               <button type="submit" className="btn btn-primary" onClick = {this.handleSubmit}>Submit</button>
							</form>
				</div>
		)
		
	}
}

export default Contact;