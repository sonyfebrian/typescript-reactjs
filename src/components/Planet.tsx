import React from 'react';
import PlanetUrlService from '../services/PlanetsUrlService';
import Loader from './Loader';

export interface Props {
  url: string;
  onClose(): void;
}

const Planet: React.FC<Props> = ({ url, onClose }) => {
  const service = PlanetUrlService(url);

  return (
    <div className="starship-modal-container">
      <div className="starship-modal-background" onClick={onClose} />

      {service.status === 'loading' && <Loader />}

      {service.status === 'loaded' && (
        <div className="starship">
          <h2>{service.payload.name}</h2>

          <div className="price">
            {!!service.payload.rotation_period &&
            parseInt(service.payload.rotation_period) ? (
              <>
                {new Intl.NumberFormat('en-US').format(
                  parseInt(service.payload.rotation_period)
                )}{' '}
                rotation_period
              </>
            ) : (
              'Call us for price'
            )}
          </div>

          <div className="starship-info">
            <div className="starship-info-item">
              <div className="label">Diameter</div>
              <div className="data">{service.payload.diameter}</div>
            </div>
            <div className="starship-info-item">
              <div className="label">Population</div>
              <div className="data">{service.payload.population}</div>
            </div>
          </div>
        </div>
      )}

      {service.status === 'error' && (
        <div className="starship">
          Error, something weird happened with the starship.
        </div>
      )}
    </div>
  );
};

export default Planet;