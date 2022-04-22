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
`;

function Button({ children, type, ...props }) {
  return <StyledButton type={type} {...props}>{children}</StyledButton>
}

export default Button