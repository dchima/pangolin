import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen, Basics } from 'styles';
import { Swan } from 'components/svg';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SwanContainer = styled.div`
  margin-top: 300px;
  svg {
    fill: #000000;
    width: 290px;
    height: 290px;
  }
`;

const BodyText = styled.h2`
  margin-top: -30px;
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  line-height: 80px;
  font-family: ${Basics.fonts.MadeSoulmazeBrush};
  color: black;
`;

const App = () => (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
      </Helmet>
      <GlobalStyle />
      <SwanContainer>
        <Swan />
      </SwanContainer>
      <BodyText>
        404
      </BodyText>
    </PageContainer>
);

export default App;
