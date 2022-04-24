import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import Introduction from './components/Introduction';
import Skills from './components/Skills';

const Container = styled.div`
  height: 100vh;
  margin: auto;
  max-width: 1320px;
  width: 100vw;
  color: var(--text-color);
`

function App() {

  return (
    <div className="app">
      <Container>
          <Header />
          <Introduction />
          <Skills/>
      </Container>
    </div>
  )
}
export default App
