/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  StyledCardTags,
  StyledCardTag,
  StyledCardHeader,
  StyledDescriptionList,
  StyledDescriptionWrapper,
  StyledDescriptionListTerm,
  StyledDescriptionListDescription,
  StyledCardWrapper,
  StyledCard,
} from '../ListPlanet/styles';
import PlanetsService from '../../services/PlanetsService';
import Loader from '../Loader';
import Planet from '../ListPlanet/Planet';

const Planets: React.FC<{}> = () => {
  const service = PlanetsService();
  const [url, setUrl] = React.useState('');

  return (
    <>
      <h1>data Planet</h1>
      <StyledCard>
        <StyledCardWrapper>
          <section>
            {service.status === 'loading' && (
            <div>
              <Loader />
            </div>
            )}
          {service.status === 'loaded'
            && service.payload.results.map((Planet) => (
              <>
              <StyledCardHeader>{Planet.name}</StyledCardHeader>
                <StyledDescriptionList>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Diameter
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {Planet.diameter}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Orbital Periode
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {Planet.orbital_period}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Gravity
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {Planet.gravity}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Population
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {Planet.population}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                </StyledDescriptionList>
                <StyledCardTags>
                  <StyledCardTag>{Planet.climate}</StyledCardTag>
                  <StyledCardTag>{Planet.terrain}</StyledCardTag>
                  <StyledCardTag>{Planet.surface_water}</StyledCardTag>
                </StyledCardTags>
              </>
            ))}
          </section>

        {!!url && <Planet url={url} onClose={() => setUrl('')} />}

        {service.status === 'error' && (
          <div>Error, the backend moved to the dark side.</div>
        )}
        </StyledCardWrapper>
      </StyledCard>
    </>
  );
};

export default Planets;
