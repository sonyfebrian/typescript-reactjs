import React from 'react';
import {
  Header,
  Main,
  Item,
  StyledSubHeaderParagraph,
  StyledCardTags,
  StyledCardTag,
} from './styles';
import PlanetsService from '../../services/PlanetsService';
import A from '../../images/2.webp';
import B from '../../images/1.webp';
import Loader from '../Loader';
import Planet from './Planet';

const Planets: React.FC<{}> = () => {
  const service = PlanetsService();
  const [url, setUrl] = React.useState('');

  return (
    <>
      <Header background="https://pbs.twimg.com/profile_banners/1060254597443452930/1541644308/1500x500">
        <div>
          <a href="https://twitter.com/codingwithmanny">
            <img alt="planet" src={A} />
            <p>List Planet</p>
          </a>
        </div>
      </Header>
      <Main>
        <section>
          {service.status === 'loading' && (
            <div>
              <Loader />
            </div>
          )}
          {service.status === 'loaded'
            && service.payload.results.map((Planet) => (
              <>
                <StyledCardTags>
                  <StyledCardTag>{Planet.climate}</StyledCardTag>
                  <StyledCardTag>{Planet.terrain}</StyledCardTag>
                  <StyledCardTag>{Planet.surface_water}</StyledCardTag>
                </StyledCardTags>
                <Item>
                  <dl>
                    <dt>Name</dt>
                    <dd>{Planet.name}</dd>
                  </dl>
                  <img alt="example" src={B} />
                  <h3>{Planet.name}</h3>
                  <StyledSubHeaderParagraph>
                    Diameter:
{' '}
                    <b>{Planet.diameter}</b>
                  </StyledSubHeaderParagraph>
                  <button onClick={() => setUrl(Planet.url)} key={Planet.url}>
                    Read More..
                  </button>
                </Item>
              </>
            ))}
        </section>

        {!!url && <Planet url={url} onClose={() => setUrl('')} />}

        {service.status === 'error' && (
          <div>Error, the backend moved to the dark side.</div>
        )}
      </Main>
    </>
  );
};

export default Planets;
