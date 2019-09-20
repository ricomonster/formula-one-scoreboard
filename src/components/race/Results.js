// dependencies
import React from 'react';

// components
import { Driver } from '@components';

const Results = () => {
  return (
    <div className="race-results">
      <Driver.Detail />

      <Driver.Detail />

      <Driver.Detail />
    </div>
  );
};

Results.propTypes = {};

export default Results;
