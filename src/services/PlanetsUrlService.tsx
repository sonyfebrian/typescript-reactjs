import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Planet } from '../types/Planets';

const PlanetsUrlService = (url: string) => {
  const [result, setResult] = useState<Service<Planet>>({
    status: 'loading'
  });

  useEffect(() => {
    if (url) {
      setResult({ status: 'loading' });
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }
  }, [url]);

  return result;
};

export default PlanetsUrlService;