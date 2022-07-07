import { useEffect, useState } from 'react';

export default function useJsonFetch(url: string, opts: any): any {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  async function getData(url: string) {
    setLoading(true);
    try {
      const response = await fetch(url, opts);
      if (response.ok) {
        const respData = await response.json();
        setData(respData);
        setLoading(false);
      } else {
        throw new Error('RESPONSE ERR');
      }
    } catch (err) {
      setError('Response error');
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(url);
  }, []);

  return [data, error, loading];
}
