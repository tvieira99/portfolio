import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn'

const GridKnowMeSection = styled.div`
margin-top: 8vh;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
column-gap: 20px;
row-gap: 50px;
margin-left: 6vw;
margin-right: 6vw;
margin-bottom: 9vh;
@media(min-width: 900px) {
  display: flex;
  flex-direction: row;
  justify-content: space-around;  
}
`;

type GridKnowMeSectionButtonProps = { gridColumn:string, gridRow:string }


const GridKnowMeSectionButton = styled.a<GridKnowMeSectionButtonProps>`
grid-column: ${({ gridColumn }) => gridColumn};
grid-row: ${( { gridRow } ) => gridRow};
font-family: 'Bitter', serif;
font-size: large;
border: 3px solid #24a3ff;
border-radius: 0px;
height: 50px;
width: auto;
@media(min-width: 900px) {
    height: 10vh;
    width: 15vw;
  }
display: inline-flex;
justify-content: center;
align-items: center;
color: #24a3ff;
&:focus{
  outline: none;
  box-shadow: none;
}
background-position: center;
transition: background 0.6s;
cursor: pointer;
background: radial-gradient(circle, transparent 1%, #eff2f4 1%) center/15000%;
&:active {
  background-color: #24a3ff;
  background-size: 100%;
  transition: background 0s;
}
`;

export default function KnowMeSection({}){
  return(
    <GridKnowMeSection>
      <GridKnowMeSectionButton href="https://www.facebook.com/profile.php?id=100035754780429" gridColumn='1/2' gridRow='1/2'><Facebook />Facebook</GridKnowMeSectionButton>
      <GridKnowMeSectionButton href="https://www.instagram.com/thgovieira/" gridColumn='2/3' gridRow='1/2'><Instagram />Instagram</GridKnowMeSectionButton>
      <GridKnowMeSectionButton href="https://github.com/tvieira99" gridColumn='1/2' gridRow='2/3'><GitHub />Github</GridKnowMeSectionButton>
      <GridKnowMeSectionButton href="https://www.linkedin.com/in/thiago-vieira-a6b6a6204/" gridColumn='2/3' gridRow='2/3'><LinkedIn />LinkedIn</GridKnowMeSectionButton>
    </GridKnowMeSection>
  );
}