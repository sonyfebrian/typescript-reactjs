import React from "react";
import PlanetUrlService from "../../services/PlanetsUrlService";
import Loader from "../Loader";
import {
  StyledCardHeader,
  StyledDescriptionList,
  StyledDescriptionWrapper,
  StyledDescriptionListTerm,
  StyledDescriptionListDescription,
  StyledCardWrapper,
  StyledCard,
} from "./styles";

export interface Props {
  url: string;
  onClose(): void;
}

const Planet: React.FC<Props> = ({ url, onClose }) => {
  const service = PlanetUrlService(url);
  
  

  return (
    <div >
      <div onClick={onClose} />

      {service.status === "loading" && <Loader />}

      {service.status === "loaded" && (
        <>
          <StyledCard>
            <StyledCardWrapper>
              <StyledCardHeader>{service.payload.name}</StyledCardHeader>
              <StyledDescriptionList>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Diameter
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {service.payload.diameter}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Rotation Period
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {service.payload.rotation_period}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Orbital Period
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {service.payload.orbital_period}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>Gravity</StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {service.payload.gravity}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
                <StyledDescriptionWrapper>
                  <StyledDescriptionListTerm>
                    Population
                  </StyledDescriptionListTerm>
                  <StyledDescriptionListDescription>
                    {service.payload.population}
                  </StyledDescriptionListDescription>
                </StyledDescriptionWrapper>
              </StyledDescriptionList>
            </StyledCardWrapper>
          </StyledCard>
        </>
      )}

      {service.status === "error" && (
        <div>
          Error, something weird happened with the starship.
        </div>
      )}
    </div>
  );
};

export default Planet;
