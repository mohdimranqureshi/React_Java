package com.example.dao;

import java.util.List;
import com.example.model.Employee;

public interface DataDao {
	
	List<Employee> getEmployeeData();
	
	String saveEmployeeData(Employee employee);
	
	String updateEmployee(Employee updateEmployee);
	
	String deleteEmployee(int id);

}
