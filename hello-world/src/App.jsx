import './App.css'
import Button from './components/Button'

function App() {

  return (
  <div style={{display: "flex", gap: "10px"}}>
     <Button label="Log In" background="green" color="white" />
     <Button label="Sign In" background="crimson" color="white" />
  </div>
  )
}

export default App
