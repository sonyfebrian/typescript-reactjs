import { useState } from 'react';
import { Service } from '../types/Service';
import { Planet } from '../types/Planets';

export type PostPlanet = Pick<
  Planet,
  'name' | 'diameter' | 'population' | 'surface_water'
>;

const PostPlanetService = () => {
  const [service, setService] = useState<Service<PostPlanet>>({
    status: 'init',
  });

  const publishPlanet = (starship: PostPlanet) => {
    setService({ status: 'loading' });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return new Promise((resolve, reject) => {
      fetch('https://swapi.dev/api/planets', {
        method: 'POST',
        body: JSON.stringify(starship),
        headers,
      })
        .then((response) => response.json())
        .then((response) => {
          setService({ status: 'loaded', payload: response });
          resolve(response);
        })
        .catch((error) => {
          setService({ status: 'error', error });
          reject(error);
        });
    });
  };

  return {
    service,
    publishPlanet,
  };
};

export default PostPlanetService;
