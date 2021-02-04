import React from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import HeaderSection from '../Header/Header';
import MainSection from '../MainSection/MainSection'
import KnowMeSection from '../KnowMeSection/KnowMeSection';
import AboutSection from '../AboutSection/AboutSection';
import WhatiUseSection from '../WhatIUseSection/WhatiUseSection';
const LayoutBody = styled.div`
background: #eff2f4
`;

export default function Layout({}) {
  return (
    <LayoutBody>
      <HeaderSection/>
      <MainSection MainSecText={"Me Conheça"}/>
      <KnowMeSection/>
      <AboutSection/>
      <WhatiUseSection />
    </LayoutBody>
  );
}