package com.example.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.model.Employee;

@Repository
public class DataDaoImpl implements DataDao {

	@Autowired
	@Qualifier("jdbcTemplate")
	JdbcTemplate jdbcTemplate;

	@Override
	public List<Employee> getEmployeeData() {

		final List<Employee> employeeList = new ArrayList<Employee>();

		String sql = "SELECT * FROM employee_details";

		return jdbcTemplate.query(sql, new ResultSetExtractor<List<Employee>>() {

			@Override
			public List<Employee> extractData(ResultSet rs) throws SQLException, DataAccessException {

				while (rs.next()) {

					Employee employee = new Employee();
					employee.setEmployeeId(rs.getInt("employee_id"));
					employee.setFirstName(rs.getString("first_Name"));
					employee.setLastName(rs.getString("last_Name"));
					employee.setDescription(rs.getString("description"));
					employeeList.add(employee);
				}
				return employeeList;
			}

		});

	}

	@Override
	public String saveEmployeeData(Employee employee) {

		String sql = "INSERT INTO employee_details (first_Name, last_Name, description) VALUES(?, ?, ?)";

		int i = jdbcTemplate.update(sql,
				new Object[] { employee.getFirstName(), employee.getLastName(), employee.getDescription() });
		if (i == 1) {
			return "Success";
		} else {
			return "Failed";
		}

	}

	@Override
	public String updateEmployee(Employee updateEmployee) {

		String sql = "UPDATE employee_details SET first_Name = ?, last_Name = ?, description = ? where employee_id = ?";
		int i = jdbcTemplate.update(sql, new Object[] {

				updateEmployee.getFirstName(), updateEmployee.getLastName(), updateEmployee.getDescription(),
				updateEmployee.getEmployeeId() });
		if (i == 1) {
			return "Success";
		} else {
			return "Failed";
		}
	}

	@Override
	public String deleteEmployee(int id) {

		String sql = "DELETE FROM employee_details where employee_id = ?";
		int i = jdbcTemplate.update(sql, new Object[] { id });
		if (i == 1) {
			return "Success";
		} else {
			return "Failed";
		}
	}

}
