import Navbar from "./components/Navbar/Navbar"
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./components/Container/Container";
import Hello from "./panels/Hello/Hello";
import Personal from "./panels/Personal/Personal";
import Section from "./panels/Section/Section";
import Contact from "./panels/Contact/Contact";
import Showcase from "./panels/Showcase/Showcase";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Container>
          <Navbar/>

          <Hello panelNum={0} id="home"/>
          <Personal panelNum={1} id="about"/>
          <Section panelNum={2} id="porto" title="Things I've made" subtitle="Nothing particularly impressive but whatever"/>
          <Showcase panelNum={3} title="Chuu" desc="A from-scratch multitasking x86 operating system with (limited) graphical interface. Not as complex as you might think, check out the source-code on my github at OS-Personal." show_path="/src/assets/gif/chuu.gif" />
          <Contact panelNum={4} id="contact"/>
        
        </Container>
      </DarkModeProvider>
    </>
  )
}

export default App
