import styled from 'styled-components';
import React from 'react';

const MainSectionDiv = styled.div`
margin-top: 8vh;
display: flex;
flex-direction: column;
align-items: center;
`;

const SectionLine = styled.div`
height: 1px;
border: 1px solid #29a2ff;
border-radius: 2px;
width: 80vw;
background: #29a2ff;
`;

const MainSectionTextStyle = styled.div`
font-size: 10vw;
@media(min-width:900px){
  font-size: xx-large;
}
color: #29a2ff;
font-family: 'DM Serif Display', serif;
`;

type MainSectionProps = { MainSecText:string }
export default function MainSection( {MainSecText}: MainSectionProps){
  return(
    <MainSectionDiv>
      <SectionLine/>
      <MainSectionTextStyle>{MainSecText}</MainSectionTextStyle>
      <SectionLine/>
    </MainSectionDiv>
  );
}