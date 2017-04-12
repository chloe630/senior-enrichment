import React from 'react';

const AllStudentsComponent = ({ allStudents }) => {
  return (
    <div>
      <h1>OUR WONDERFUL STUDENTS!!</h1>
      <div>
        {
          allStudents && allStudents.map(campus => {
            return (
              <div>
                <li key = {student.id}><Link to={`/student/${student.id}`}>{ student.name }</Link></li>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
export default AllStudentsComponent;

