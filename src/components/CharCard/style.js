import styled from "styled-components";
import { css } from "styled-components";

export const Card = styled.li`
  list-style: none;
  width: 200px;
  height: 250px;

  img {
    width: 150px;
  }

  ${(props) => {
    switch (props.status) {
      case "Alive":
        return css`
          background: #72f2eb;
          color: #3f7c85;
        `;
      default:
        return css`
          background: #ff5f5d;
          color: #bd2a2e;
        `;
    }
  }}
`;
