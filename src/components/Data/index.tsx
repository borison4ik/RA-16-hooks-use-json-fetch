import React from 'react';

import useJsonFetch from '../../hooks/useJsonFetch';

interface DataProps {
  uri: string;
}
export const Data: React.FC<DataProps> = ({ uri }) => {
  const [data, error, loading] = useJsonFetch(`${process.env.REACT_APP_DATA_API}/${uri}`, { method: 'GET' });

  return <>{loading ? 'Loading...' : error ? <div>{error}</div> : <div>{data && data.status}</div>}</>;
};
