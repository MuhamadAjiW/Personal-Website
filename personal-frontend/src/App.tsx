import Navbar from "./components/Navbar/Navbar"
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./components/Container/Container";
import Hello from "./pages/Hello/Hello";
import Personal from "./pages/Personal/Personal";
import Section from "./pages/Section/Section";
import Contact from "./pages/Contact/Contact";
import Showcase from "./pages/Showcase/Showcase";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Container>
          <Navbar/>

          <Hello pageNum={0} id="home"/>
          <Personal pageNum={1} id="about"/>
          <Section pageNum={2} id="porto" title="Things I've made" subtitle="Nothing particularly impressive but whatever"/>
          <Showcase pageNum={3} title="Showcase 1" desc="Description" show_path="/src/assets/images/personal.png" />
          <Contact pageNum={4} id="contact"/>
        
        </Container>
      </DarkModeProvider>
    </>
  )
}

export default App
