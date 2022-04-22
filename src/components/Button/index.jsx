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
      color: var(--primary-color);
  }

  ${({ type }) => type === "contact" && css`
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 3px;

    &:hover {
      background-color: var(--secondary-color);
      color: var(--text-color);
    }

  `}

  ${({ type }) => type === "cv" && css`
    
    position: relative;
    margin: 20px;
    border-bottom: 2px solid var(--primary-color);

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

  ${({ type }) => type === "nav-link" && css`
    position: relative;
    opacity: 0.5;
    margin-left: 1.8rem;

    &::after {
      position: absolute;
      content: "";
      width: 0%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--primary-color);
      opacity: 0;
      transition: 300ms ease-in-out;
    }

    &:hover {
      color: var(--text-color);
      opacity: 1;
    }

    &:hover::after {
      opacity: 1;
      width: 100%;
    }

  `}
`;

function Button({ children, type, component = 'button',...props }) {
  return <StyledButton as={component} type={type} {...props}>{children}</StyledButton>
}

export default Button