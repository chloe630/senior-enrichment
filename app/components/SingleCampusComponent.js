import React, { Component } from 'react';

const SingleCampusComponent = ({ campus }) => {
    return (
      <div>
        <div>
          <div >
            <h3>{ this.props.campus.name }</h3>
            <img src="http://placehold.it/400x400" />
          </div>
        </div>
      </div>
    );
};
export default SingleCampusComponent;

