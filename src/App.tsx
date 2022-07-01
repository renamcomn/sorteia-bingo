import { useContext } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Number from "./components/Number";

import { BingoContext } from './context/BingoContext';

function App() {
  const { sorterNumber } = useContext(BingoContext);

  return (
    <>
      <Header />
      <Button title="Sortear" onClick={sorterNumber}/>
      <Number />
    </>
    
  )
}

export default App
