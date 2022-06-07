import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
  color: #3b3936;
  margin-bottom: 20px;
`;

export const CardsContainer = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
`;

export const StyledButton = styled.button`
  color: white;
  background: #747e7e;
  font-weight: 600;
  cursor: pointer;

  border: none;
  border-radius: 8px;
  padding: 20px;

  margin-left: 15px;

  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;
        background: #b2bebf;
        opacity: 0.9;
      `;
    } else {
      return css`
        color: white;
        background: #747e7e;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background: #3b3936;
          color: white;
          filter: brightness(1.1);
        }
      `;
    }
  }}
`;
