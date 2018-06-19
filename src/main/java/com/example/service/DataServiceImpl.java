package com.example.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.dao.DataDao;
import com.example.model.Employee;

@Service
public class DataServiceImpl implements DataService{
	
	@Autowired
	private DataDao dataDao;

	@Override
	@Transactional
	public List<Employee> getEmployeeData() {
		return dataDao.getEmployeeData();
	}

	@Override
	@Transactional
	public String saveEmployeeData(Employee employee) {
		return dataDao.saveEmployeeData(employee);
	}

	@Override
	@Transactional
	public String updateEmployee(Employee updateEmployee){
		return dataDao.updateEmployee(updateEmployee);
	}

	@Override
	@Transactional
	public String deleteEmployee(int id) {
		return dataDao.deleteEmployee(id);
	}}
