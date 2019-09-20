// dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { format as dateFormat } from 'date-fns';

const DateTime = ({ children, format, value }) => {
  return (
    <time dateTime={value || children}>
      {dateFormat(new Date(value || children), format)}
    </time>
  );
};

DateTime.propTypes = {
  children: PropTypes.any,
  format: PropTypes.string,
  value: PropTypes.string,
};

export default DateTime;
