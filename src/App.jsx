import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import Introducing from './components/Introducing';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  color: var(--text-color);

  .content {
    margin: auto;
    width: 1120px;
    display: flex;
  }
`

function App() {
  return (
    <Container>
      <div className='content'>
        <Header />
        <Introducing />
      </div>
    </Container>
  )
}
export default App
