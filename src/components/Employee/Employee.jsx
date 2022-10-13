import React from 'react'
import './Employee.scss'
import team from '../../data/team'
import Counter from '../Counter/Counter'

const Employee = (props) => {

    const employeeName = props.EmployeeArr.map((employees => 
      <div>
          <div>{employees.name}</div>
          <div>{employees.role}</div>
          <div className='counter' key={employees.id}></div>
          <h4>Counter</h4>
          <Counter />
      </div>
    ));

  return (
    
    <div>{employeeName}</div>
    
  )
}

export default Employee;