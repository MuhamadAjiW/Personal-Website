import Navbar from "./components/Navbar/Navbar"
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./components/Container/Container";
import Hello from "./pages/Hello/Hello";
import Clear from "./pages/Clear/Clear";
import Personal from "./pages/Personal/Personal";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Container>
          <Navbar/>

          <Hello pageNum={0}/>
          <Clear pageNum={1}/>
          <Personal pageNum={2}/>
        
        </Container>
      </DarkModeProvider>
    </>
  )
}

export default App
