import * as React from 'react';

export default function useAsync(request, ...depr) {
  const [data, setData] = React.useState(null);
  const [status, setLoading] = React.useState('loading');
  const [error, setError] = React.useState(null);

  const execute = React.useCallback(
    (...params) => {
      request
        .apply(null, params)
        .then((res) => {
          setLoading(false);
          setData(data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    },
    [request]
  );

  React.useEffect(() => {
    execute.apply(null, depr);
  }, [execute]);

  return [data, status, error, execute];
}
