import React from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  color: var(--text-color);
`

const Content = styled.div`
  margin: auto;
  width: 1120px;
  display: flex;
`

function App() {
  return (
    <Container>
      <Content>
        <Navbar />
      </Content>
    </Container>
  )
}
export default App
