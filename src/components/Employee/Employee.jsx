import React from 'react'
import './Employee.scss'
import team from '../../data/team'

const Employee = (props) => {

    const employeeName = props.EmployeeArr.map((employees => 
      <div>
          <div>{employees.name}</div>
          <div>{employees.role}</div>

      </div>
    ));

  return (
    
    <div>{employeeName}</div>
    // <div className="trackEmployees">{role}</div>
  )
}

export default Employee;