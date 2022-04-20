import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border: none;
  background-color: transparent;
  color: var(--text-color);
  text-transform: uppercase;
  transition: all 200ms ease-in-out;

  &:hover {
      color: var(--tertary-color);
  }

`;

function Button({ children }) {
    return <StyledButton>{children}</StyledButton>
}

export default Button