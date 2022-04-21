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

  ${({ type }) => type === "contact" && css`
  
    background-color: var(--tertary-color);
    padding: 1rem;
    border-radius: 3px;

    &:hover {
      background-color: #600094d2;
      color: #ffffff91;
    }

  `}

  ${({ type }) => type === "cv" && css`

    position: relative;
    margin: 20px;
    border-bottom: 2px solid var(--tertary-color);

    &::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: var(--animation-button-color);
      transition: 300ms ease-in-out;
    }

    &:hover {
      color: var(--text-color);
    }

    &:hover::before {
      width: 100%;
      
    }

  `}

`;

function Button({ children, type}) {
    return <StyledButton type={type}>{children}</StyledButton>
}

export default Button