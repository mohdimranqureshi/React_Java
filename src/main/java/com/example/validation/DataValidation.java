package com.example.validation;

import com.example.exception.DataException;
import com.example.model.Employee;

public class DataValidation {

	public static void validateEmployeeData(Employee employee){
		if(employee.getFirstName() == null || "".equals(employee.getFirstName())){
			throw new DataException("first name is blank");
		}
	}
}
