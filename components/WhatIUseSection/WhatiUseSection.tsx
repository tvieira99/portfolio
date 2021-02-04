import styled from 'styled-components';

const WhatiUseSectionFlexContainer = styled.div`
display: flex;
flex-direction: column;
@media(min-width: 900px){
  flex-direction: row;
}
margin-left: 6vw;
margin-right: 6vw;
justify-content: center;
align-items: center;
`;

const WhatiUseSectionHeaderContainer = styled.div`
display flex;
flex-direction: column;
margin-left: 6vw;
margin-right: 6vw;
justify-content: center;
align-items: center;
margin-bottom: 30px;
`;

const WhatiUseSectionTextStyle = styled.div`
font-size: 10vw;
@media(min-width:900px){
  font-size: xx-large;
}
color: #29a2ff;
font-family: 'DM Serif Display', serif;
`;

const SectionLine = styled.div`
height: 1px;
border: 1px solid #29a2ff;
border-radius: 2px;
width: 80vw;
background: #29a2ff;
`;

const MarginBottom = styled.div`
height: 8vh;
width: 8vw;
`;

export default function WhatiUseSection({}){
  return(
    <div>
      <WhatiUseSectionHeaderContainer>
        <WhatiUseSectionTextStyle>O que uso</WhatiUseSectionTextStyle>
        <SectionLine />
      </ WhatiUseSectionHeaderContainer>
        <WhatiUseSectionFlexContainer>
          <img 
          src='/mongodb.svg'
          width={'200vh'}
          height={'200vh'}
           />
           <MarginBottom />
          <img 
          src='/next-js.svg'
          width={'200vh'}
          height={'200vh'}
           />
          <MarginBottom/>
          <img
          src='/typescript.svg'
          width={'200vh'}
          height={'200vh'}
          />
          <MarginBottom/>
          <img
          src='/express-109.svg'
          width={'200vh'}
          height={'200vh'}
          />
        </WhatiUseSectionFlexContainer>
    </div>
  );
};