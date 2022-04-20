
//import "./button.css";
import styled from "styled-components";

// export const Button = ({children, onClick}) => {
//     return <button onClick={onClick} className="btn">{children}</button>
// };

 export const Button = styled.button `
  background-color: transparent;
    border: none;

    border-radius: 4px;
    padding: 5px;
    padding-top: 8px;
    text-align: center;
    background-color: ${(props) => (props.theme === "light" ? "red" : "green")};
    margin: 10px;
    color: ${(props) => (props.theme == "light" ? "white" : "red")};
    cursor: pointer;

    &:hover {
      box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
    }
 `;


