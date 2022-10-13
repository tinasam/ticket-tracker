import React from 'react'
import './App.css';
import Employee from './components/Employee/Employee';
import team from './data/team';



const App = () => {
  return (
    <>
        <div className="track">
          <section className="tracker">
              <h2>Tracker</h2>

              <div className="trackEmployees">
                <Employee title="employeeInofAlbums" EmployeeArr={team} />
              </div>
            </section>
        </div>
    </>
  );
}

export default App;
