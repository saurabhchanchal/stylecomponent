import { useEffect, useState } from 'react'

import './App.css'
import { Button } from './Component/Button';
import { Flex } from './Component/Flex';
function App() {
 
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
     <h1>Theme is: {theme}</h1>

     <Button onClick={() => {
       setTheme(theme === "light" ? "dark" : "light");// trenery operator
      //  if(theme === "dark") {
      //    setTheme("light");
      //  } else {
      //    setTheme("dark");
      //  }
     }} >Change theme</Button>

     <Button 
     theme={theme}
     onClick={() => {
       alert("Clicked me");
     }}>Click</Button>

     <Button 
     theme={theme}
     onClick={() => {
       alert("sign in button")
     }}>Sign In</Button>

     <Button>Sign out</Button>



    <Flex>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </Flex>


    </div>
  )
}

export default App
