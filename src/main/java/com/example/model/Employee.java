package com.example.model;

public class Employee {

	private int employeeId;
	private String firstName;
	private String lastName;
	private String description;

	public Employee() {
	}

	public Employee(int employeeId, String firstName, String lastName, String description) {
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.description = description;
	}
	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}


	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
