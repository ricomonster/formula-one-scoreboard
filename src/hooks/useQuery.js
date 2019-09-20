// dependencies
import { useContext, useEffect, useState } from 'react';

// context
import GraphQLContext from '@context/GraphQLContext';

const useQuery = (query, params = {}) => {
  // graphql context
  const { handleFetch } = useContext(GraphQLContext);

  // extract the content of the params
  const { variables = {} } = params;

  // state
  const [state, setState] = useState({
    data: {},
    error: null,
    loading: false,
  });

  const handleFetchQuery = async () => {
    // still not loading?
    if (!state.loading) {
      // set the loading state
      setState({ ...state, loading: true });
    }

    // fetch
    const json = await handleFetch(query, variables);

    // errors?
    if (json.errors) {
      // update the state
      setState({
        data: {},
        error: json.errors[0],
        loading: false,
      });
    } else {
      // no errors
      setState({
        data: json.data,
        error: null,
        loading: false,
      });
    }
  };

  useEffect(() => {
    handleFetchQuery();
  }, [JSON.stringify(variables)]);

  return { ...state };
};

export default useQuery;
