import React from 'react'
import './App.scss';
import Employee from './components/Employee/Employee';
import team from './data/team';




const App = () => {
  return (
    <>
        <div className="track">
          <section className="tracker">
              <h2 className="tracker_header"> Ticket Tracker</h2>

              <div className="trackEmployees">
                <Employee title="employeeInofAlbums" EmployeeArr={team} />
              </div>
            </section>
        </div>
    </>
  );
}

export default App;
