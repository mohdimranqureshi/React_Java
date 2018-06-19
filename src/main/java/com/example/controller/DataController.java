package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.DataException;
import com.example.model.Employee;
import com.example.service.DataService;
import com.example.validation.DataValidation;

@RestController
public class DataController {

	@Autowired
	private DataService dataService;

	@RequestMapping(value = "/getData", method = RequestMethod.GET)
	public ResponseEntity<List<Employee>> getEmployeeData() {

		HttpHeaders httpHeader = new HttpHeaders();
		List<Employee> employee = new ArrayList<Employee>();
		try{
		employee = dataService.getEmployeeData();
		httpHeader.setCacheControl("private, max-age = 0");
		}catch(DataException exception){
			exception.getMessage();
		}
		return new ResponseEntity<>(employee,httpHeader, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/saveEmployee", method = RequestMethod.POST)
	public ResponseEntity<String> saveNewEmployee(@RequestBody Employee employeeData) {
		
		String success = "";
		DataValidation.validateEmployeeData(employeeData);
		success = dataService.saveEmployeeData(employeeData);
		
		HttpHeaders httpHeader = new HttpHeaders();
		httpHeader.setCacheControl("private, max-age = 0");
		
		return new ResponseEntity<>(success,httpHeader,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/updateEmployee", method = RequestMethod.PUT)
	public ResponseEntity<String> updateEmployee(@RequestBody Employee updatedEmployee) {
		
		String success = "";
		success = dataService.updateEmployee(updatedEmployee);
		
		HttpHeaders httpHeader = new HttpHeaders();
		httpHeader.setCacheControl("private, max-age = 0");
		
		return new ResponseEntity<>(success,httpHeader, HttpStatus.OK);
	}
	
	@RequestMapping(value = "deleteEmployee", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteEmployee(@RequestBody Employee employee) {
		
		int employeeId = employee.getEmployeeId();
		String success = "";
		success = dataService.deleteEmployee(employeeId);
		
		HttpHeaders httpHeader = new HttpHeaders();
		httpHeader.setCacheControl("private, max-age = 0");
		
		return new ResponseEntity<>(success,httpHeader, HttpStatus.OK);
	}
}
