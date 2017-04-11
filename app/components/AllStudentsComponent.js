import React from 'react';

const AllStudentsComponent = ({ allStudents }) => {
  console.log(allStudents);
  return (
    <div>
      <h1>OUR WONDERFUL STUDENTS!!</h1>
      <div>
        {
          allStudents.map(student => {
            return (
              <div key={student.name}>
                <Link to={`/singlePusheen/${student.name}`}>{ student.name }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
export default AllStudentsComponent;

