package com.example.service;

import java.util.List;
import com.example.model.Employee;

public interface DataService {

	public List<Employee> getEmployeeData();
	
	public String saveEmployeeData(Employee employee);
	
	public String updateEmployee(Employee updateEmployee);
	
	public String deleteEmployee(int id);
}
