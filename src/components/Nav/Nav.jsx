/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState } from 'react';
import {
  MenuLabel,
  Icon,
    NavBackground,
    Navigation,
    List,
    ItemLink,
  } from './styles';

export default function Nav() {
    const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  return (

       <>
       <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
       <Icon>&nbsp;</Icon>
       </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

         <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/list-planet">
              List Planet
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/detail-planet">
              Detail Planet
            </ItemLink>
          </li>
        </List>
         </Navigation>
       </>
  );
}
