import React from 'react'
import styled, { keyframes } from 'styled-components';

const HeaderLayout = styled.div`
font-family: 'Inconsolata', regular;
font-weight: 600;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
`;

const HeaderTextStyle = styled.div`
font-size: 400%;
letter-spacing: -3px;
color: #101c25;
`;

const HeaderCommentStyle = styled.div`
margin-left:10%;
margin-right:10%;
margin-top: 30px;
font-size: 130%;
color: #989eb6;
letter-spacing: normal;
text-align:center;
`;

const CursorSpanKeyframes = keyframes`
0% { opacity: 100%; }
50% { opacity: 100%; }
51% { opacity: 0%; }
100% { opacity: 0%; }
`;

const CursorSpan = styled.span`
animation-name: ${CursorSpanKeyframes};
animation-duration: 1.5s;
animation-iteration-count: infinite;
animation-direction: reverse;
opacity: 0%;
`;

export default function HeaderSection({}){
  return (
  <HeaderLayout>
      <HeaderTextStyle>Hey<span style={{ fontSize: '70%' }}>,</span></HeaderTextStyle>
      <HeaderTextStyle>Eu<span style={{ fontSize: '50%' }}> </span>sou</HeaderTextStyle>
      <HeaderTextStyle>Thiago<span style={{ fontSize: '50%' }}> </span>:)</HeaderTextStyle>
      <HeaderCommentStyle>Desenvolvedor fullstack que ama aprender<CursorSpan>|</CursorSpan></HeaderCommentStyle>
  </HeaderLayout>
  );
}
