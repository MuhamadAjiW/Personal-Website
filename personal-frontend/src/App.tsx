import Navbar from "./components/Navbar/Navbar"
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./components/Container/Container";
import Hello from "./pages/Hello/Hello";
import Clear from "./pages/Clear/Clear";
import Personal from "./pages/Personal/Personal";
import Section from "./pages/Section/Section";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Container>
          <Navbar/>

          <Hello pageNum={0} id="home"/>
          <Personal pageNum={1} id="about"/>
          <Section pageNum={2} title="Things I've made" subtitle="Nothing particularly impressive but whatever"/>
          <Contact pageNum={3} id="contact"/>
        
        </Container>
      </DarkModeProvider>
    </>
  )
}

export default App
