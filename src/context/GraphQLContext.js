// dependencies
import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const GraphQLContext = createContext({});

export const GraphQLProvider = ({ children }) => {
  const handleFetch = async (query, variables = {}) => {
    const body = { query, variables };

    // headers
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    // TODO: place the url somewhere. possibly on config file
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const json = await response.json();

    return json;
  };

  return (
    <GraphQLContext.Provider value={{ handleFetch }}>
      {children}
    </GraphQLContext.Provider>
  );
};

GraphQLProvider.propTypes = {
  children: PropTypes.any,
};

export default GraphQLContext;
