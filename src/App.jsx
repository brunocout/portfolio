import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import Introducing from './components/Introducing';

const Container = styled.div`
  height: 100vh;
  margin: auto;
  max-width: 1120px;
  width: 100vw;
  color: var(--text-color);
`

function App() {
  return (
    <div className="app">
      <Container>
          <Header />
          <Introducing />
      </Container>
    </div>
  )
}
export default App
