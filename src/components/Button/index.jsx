import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border: none;
  background-color: transparent;
  color: var(--text-color);
  text-transform: uppercase;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
      color: var(--tertary-color);
  }

  ${({ type }) => type === "btn-cv" && css`
  
    background-color: var(--tertary-color);
    margin-top: 20px;
    padding: 1rem;
    border-radius: 3px;

    &:hover {
      background-color: #600094d2;
      color: #ffffff91;
    }

  `}

`;

function Button({ children, type}) {
    return <StyledButton type={type}>{children}</StyledButton>
}

export default Button