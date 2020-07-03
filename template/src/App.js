import React from 'react';
import styled from 'styled-components';
import { Container, Stack } from '@tymate/margaret';
import { fontStyles } from 'ui';
import { formatDate } from 'utils';
import logo from 'images/logo.svg';

const Main = styled(Stack)`
  min-height: 90vh;
`;

const Title = styled.h1`
  ${fontStyles.h1Mega}
`;

const App = () => {
  return (
    <Container>
      <Main size="full" alignX="center" alignY="center" direction="column">
        <img src={logo} alt="Tymate" />
        <Title>SPA Starter pack</Title>
        <Stack>{formatDate(new Date(), 'dd MMM yyyy')}</Stack>
      </Main>
    </Container>
  );
};

export default App;
