import React from 'react';

const AllCampusComponent = ({ allCampuses }) => {
  return (
    <div>
      <h1>WELCOME TO MARGARET HAMILTON INTERPLANETARY ACADEMY OF JAVASCRIPT!</h1>
      <div>
        {
          allCampuses && allCampuses.map(campus => {
            return (
              <div>
                <li key = {campus.id}><Link to={`/campus/${campus.id}`}>{ campus.name }</Link></li>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default AllCampusComponent;