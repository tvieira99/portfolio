import React from 'react';
import styled from 'styled-components';

const AboutSectionFlexColumnBox = styled.div`
margin-top: 30px;
@media(min-width: 900px){
  margin-top: 0px;
}
display: flex;
flex-direction: column;
align-items: center;
margin-left: 6vw;
margin-right: 6vw;
`;

const AspasStyle = styled.div`
font-size: 400%;
font-family: 'Lily Script One', cursive;
`;

const AboutSectionTextStyle = styled.div`
font-family: 'Inconsolata', regular;
font-weight: 800;
font-size: large;
color: #071520;
margin-bottom: 3vh;
text-align: justify;
`;


export default function AboutSection({}){
  return(
    <AboutSectionFlexColumnBox>
      <AspasStyle>“</AspasStyle>
      <AboutSectionTextStyle>Tenho 21 anos e estou procurando minha primeira experiência como desenvolvedor. Me contate pelo LinkedIn se quiser me dar essa oportunidade :)</AboutSectionTextStyle>
      <AspasStyle>”</AspasStyle>
    </AboutSectionFlexColumnBox>
  );
}