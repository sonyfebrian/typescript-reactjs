import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Planet } from '../types/Planets';


export interface Planets {
  results: Planet[];
}

const useStarshipsService = () => {
  const [result, setResult] = useState<Service<Planets>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then(response => response.json()
        
      )
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useStarshipsService;