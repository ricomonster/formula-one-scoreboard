// dependencies
import { useContext, useState } from 'react';

// context
import GraphQLContext from '@context/GraphQLContext';

const useMutation = (query, params = {}) => {
  // get the handleFetch from the GraphQL Context
  const { handleFetch } = useContext(GraphQLContext);

  // set the state
  const [state, setState] = useState({
    data: {},
    error: null,
    loading: false,
  });

  // get the contents of the params
  const { complete, error } = params;

  const handleMutation = async (variables = {}) => {
    // set we're loading
    setState({ ...state, loading: true });

    // initialize where we are going to store the result
    let value = null;

    // send the request
    const json = await handleFetch(query, variables);

    // errors?
    if (json.errors) {
      // update the state
      setState({
        data: {},
        error: json.errors[0],
        loading: false,
      });

      // does the error function called from the params?
      if (error) {
        // set it
        error(json.errors[0].message, variables);
      }

      // set the value
      return json.errors[0].message;
    }

    // no errors
    setState({
      data: json.data,
      error: null,
      loading: false,
    });

    // does the complete function called from the params
    if (complete) {
      // set it
      complete(json.data);
    }

    // return the value
    return json.data;
  };

  return [handleMutation, state];
};

export default useMutation;
