/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Planet from './DetailPlanet';
import PostPlanetService, {
  PostPlanet,
} from '../../services/PostPlanetService';

import Loader from '../Loader';
import { Modal, Button } from './styles';

// eslint-disable-next-line react/function-component-definition
const CreateStarship: React.FC<{}> = () => {
  const initialStarshipState: PostPlanet = {
    name: '',
    diameter: '',
    population: '',
    surface_water: '',
  };
  const [starship, setStarship] = React.useState<PostPlanet>(
    initialStarshipState,
  );
  const { service, publishPlanet } = PostPlanetService();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setStarship((prevStarship) => ({
      ...prevStarship,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    publishPlanet(starship).then(() => setStarship(initialStarshipState));
  };
  const [showModal, setShowModal] = useState(false);
  const onClickToggleModal = () => {
    setShowModal(!showModal);
 };

  return (
    <>
    <Button onClick={onClickToggleModal}>Create Data</Button>
    <Planet />
      <Modal show={showModal}>
        <div className="card sell-starship">
        <button onClick={onClickToggleModal}>&times;</button>
          <p className="form-title">Create Data Planet</p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={starship.name}
                onChange={handleChange}
          />
            </div>
            <div>
              <label>Surface Water</label>
              <input
                type="text"
                name="surface_water"
                value={starship.surface_water}
                onChange={handleChange}
          />
            </div>
            <div>
              <label>Population</label>
              <input
            type="text"
            name="population"
            value={starship.population}
            onChange={handleChange}
          />
            </div>
            <div>
              <label>Diameter</label>
              <input
            type="text"
            name="diameter"
            value={starship.diameter}
            onChange={handleChange}
          />
            </div>
            <div className="button-container">
              <button type="submit">Send</button>
            </div>
          </form>
          {service.status === 'loading' && (
          <div className="loader-container">
          <Loader />
        </div>
      )}
          {service.status === 'loaded' && (
          <div>Your data has been submitted.</div>
      )}
          {service.status === 'error' && (
          <div>
          A disturbance in the force prevented your data to be submitted.
        </div>
      )}
        </div>
      </Modal>
     <h1>
{' '}

{starship.diameter}
</h1>
    </>
  );
};

export default CreateStarship;
