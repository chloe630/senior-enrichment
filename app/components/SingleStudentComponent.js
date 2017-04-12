import React, { Component } from 'react';

const SingleStudentComponent = ({ student }) => {
    return (
      <div>
        <div>
          <div >
            <h3>{ this.props.student.name }</h3>
          </div>
        </div>
      </div>
    );
};

export default SingleStudentComponent;