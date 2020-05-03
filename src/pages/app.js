import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
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

const App = ({ theme, toggleTheme }) => (
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <GlobalStyle />
        <SwanContainer>
          <Swan />
      </SwanContainer>
    </PageContainer>
);

export default App;
