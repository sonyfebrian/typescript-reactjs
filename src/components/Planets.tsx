import React from 'react';
import PlanetsService from '../services/PlanetsService';
import Loader from './Loader';
import Planet from './Planet';

const Planets: React.FC<{}> = () => {
  const service = PlanetsService();
  const [url, setUrl] = React.useState('');

  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        {service.status === 'loaded' &&
          service.payload.results.map(Planet => (
            <div
              className="Planet-item"
              onClick={() => setUrl(Planet.url)}
              key={Planet.url}
            >
              {Planet.name}
            </div>
          ))}
        {!!url && <Planet url={url} onClose={() => setUrl('')} />}
      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default Planets;