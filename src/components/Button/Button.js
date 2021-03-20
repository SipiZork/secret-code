import React from 'react';
import styled from 'styled-components';

const Button = ({text, ...buttonProps}) => {
  return (
    <StyledButton {...buttonProps}>
      <div className="bg"></div>
      <p>{text}</p>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: .5rem;
  font-size: 1.2rem;
  outline: none;
  border: 1px solid #d7d7d7;
  color: #d7d7d7;
  background: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover, :active {
    .bg {
      width: 200%;
    }
    p {
      color: black;
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: -1.5rem;
    height: 100%;
    z-index: 5;
    width: 0;
    background: #d7d7d7;
    transition: width .35s;
    transform: skew(45deg);
  }

  p {
    position: relative;
    z-index: 10;
    transition: width .35s;
    text-transform: uppercase;
  }
`;

export default Button;
