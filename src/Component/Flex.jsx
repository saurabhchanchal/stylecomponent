

import styled from "styled-components"

 export const Flex = styled.div `
    display:flex;
    justify-content:center;

  & div {
      color: red;
      border: 1px solid blue;
      margin: 20px;
      padding: 5px;
      padding-top: 8px;
      border-radius: 4px;
      background-color: teal;
      color: white;
      text-align: center;

  }
  & div:hover {
      box-shadow:rgba(253, 0, 236, 0.5) 0 3px 8px;
  }
`