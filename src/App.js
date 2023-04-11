import {useState} from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body{
  border: solid black;
  height: 100vh;
  background-color: gray;
  display:flex;
  align-items: center;
  justify-content: center;
}
`;
const Contander = styled.main`
background-color: #595B67;
border: solid red;
display:flex;
justify-content: center;
flex-direction:column;
align-items: center;
height: 25vh;
width: 20vw;
border-radius: 20px;
`;
const Title = styled.h1`
text-align: center;
color: darkgreen;
`;
const Count = styled.p`
font-size: 30px;
`;
const Buttons = styled.button`
color: red;
height: 6vh;
width: 6vh;
border-radius: 100%;
font-size: 30px;
`;

export default function App() {

  const [count, setCount] = useState(0)

  function aumentar() {
    setCount(count < 10 ? count + 1 : count ) 
  }

  function diminuir() {
    setCount(count > 0 ? count - 1 : count)
  }

  return (
    <>
    < GlobalStyle />
  <Contander>
    <Title>Contador</Title>
    <Count>{ count }</Count>
    <Buttons onClick={aumentar}>+</Buttons>
    <Buttons onClick={diminuir}>-</Buttons>
  </Contander>
   </>
  );
}
