import React from 'react'
import './Employee.scss'
import team from '../../data/team'
import Counter from '../Counter/Counter'

const Employee = (props) => {

    const employeeName = props.EmployeeArr.map((employees => 
      <div className='employeeCard'  key={employees.id}>
          <div className='empName'>{employees.name}</div>
          <div className='empRole'>{employees.role}</div>
          <Counter />
      </div>
    ));

  return (
    
    <div className='allEmployees'>{employeeName}</div>
    
  )
}

export default Employee;