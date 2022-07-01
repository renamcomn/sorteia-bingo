import Button from "./components/Button";
import Header from "./components/Header";

function App() {

  function sorterNumber() {
      let number = Math.floor(Math.random() * 75 + 1);
      console.log(number);
      return number
      
  }

  return (
    <>
      <Header />
      <Button title="Sortear" onClick={sorterNumber}/>
    </>
    
  )
}

export default App
