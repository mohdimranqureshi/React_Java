'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const fetch = require('isomorphic-fetch');
const Promise = require('es6-promise').polyfill();
import {Link} from 'react-router';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
		this.onCreate = this.onCreate.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	loadFromServer(){
		
		fetch('/demoReact/getData').then(result =>result.json())
									.then(employees => this.setState({employees}));
	}
	
	componentDidMount() {
		
		this.loadFromServer();
	}
	
componentWillMount() {
		
		this.loadFromServer();
	}

	onCreate(newEmployee) {
		var self = this;
		fetch('/demoReact/saveEmployee',{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(newEmployee)
			
		}).then(response => {
			self.loadFromServer();
		});
	}
	
	onUpdate(employee){
		
		var self = this;
		
		fetch('/demoReact/updateEmployee',{
			
			method:'PUT',
			headers:{
			
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(employee)
		}).then(response => {
			self.loadFromServer();
		});
	}
	
	onDelete(employee){
		 
		var self = this;
		fetch('/demoReact/deleteEmployee',{
				
				method:'DELETE',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					employeeId:employee.employeeId
				})
			}).then(response => {
				self.loadFromServer();
			});
	}

	render() {
		return (
				<div>
					<CreateDialog onCreate={this.onCreate} />
					<EmployeeList employees={this.state.employees}
								  onUpdate={this.onUpdate} 
								  onDelete={this.onDelete}/>
				</div>
			)
	}
}

class CreateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		
		var self = this;
		var newEmployee = {};
		
		newEmployee.firstName=this._firstName.value;
		newEmployee.lastName=this._lastName.value;
		newEmployee.description=this._description.value;
		
		
		this._firstName.value ="";
		this._lastName.value ="";
		this._description.value ="";

		e.preventDefault();
		this.props.onCreate(newEmployee);
		window.location = "#";
	}

	render() {
		
		return (
				
				<div><Link to = "/demoReact/" className = "backButton glyphicon glyphicon-arrow-left">Back</Link>
			<div className=" createBtn">
				
				<a  href="#createEmployee" className="btn btn-info">Create</a>

				<div id="createEmployee" className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Create new employee</h2>

						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="FirstName" id = "firstName" className="field" ref={(a) => this._firstName = a} />
								<input type="text" placeholder="lastName" id="lastName" className="field" ref={(a) => this._lastName = a} />
									<input type="text" placeholder="Description" id="desc" className="field" ref={(a) => this._description = a} />
									<button type="submit" >Create</button>
						</form>
					</div>
				</div>
			</div>
			</div>
		)
	}
}

class UpdateEmployee extends React.Component{
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e){
		e.preventDefault();
		var updatedEmployee = {};
		
			updatedEmployee.firstName=this._firstName.value,
			updatedEmployee.lastName=this._lastName.value,
			updatedEmployee.description=this._description.value,
			updatedEmployee.employeeId= this.props.employee.employeeId
			this.props.onUpdate(updatedEmployee);
			window.location = "#";
	}
	
	render(){
		
		var dialogId = "updateEmployee-" + this.props.employee.employeeId;
		
		return(
				
				<div>
				<a href={"#" + dialogId} className="btn btn-info">Update</a>
				<div id={dialogId} className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Update an employee</h2>

						<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="FirstName" id = "firstName" defaultValue = {this.props.employee.firstName} className="field" ref={(a) => this._firstName = a} />
							<input type="text" placeholder="lastName" id="lastName" defaultValue = {this.props.employee.lastName} className="field" ref={(a) => this._lastName = a} />
								<input type="text" placeholder="Description" id="desc" defaultValue = {this.props.employee.description} className="field" ref={(a) => this._description = a} />
								<button type="submit" >Update</button>
					</form>
					</div>
				</div>
			</div>
		)}
}

class EmployeeList extends React.Component{
	render() {
		var employees = this.props.employees.map(employee =>
			<Employee key={employee.employeeId} employee={employee}
			onUpdate={this.props.onUpdate}
			onDelete = {this.props.onDelete}/>
		);
		return (
				<div className="tableData"> 
			<table className="table table-striped">
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
						<th></th>
						<th></th>
					</tr>
					{employees}
				</tbody>
			</table>
			</div>
		)
	}
}

class Employee extends React.Component{
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(){
		this.props.onDelete(this.props.employee);
	}
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
				<td>
				<UpdateEmployee employee = {this.props.employee}
								attribute = {this.props.attribute}
								onUpdate = {this.props.onUpdate} />
				</td>
				<td><a onClick = {this.handleDelete} className="btn btn-info">Delete</a></td>
			</tr>
		)
	}
}

export default App;