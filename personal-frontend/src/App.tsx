import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Page from "./components/Page/Page"
import { DarkModeProvider } from "./context/DarkModeContext";
import Container from "./components/Container/Container";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Container>
          <Navbar></Navbar>
          <Page></Page>
        </Container>
      </DarkModeProvider>
    </>
  )
}

export default App
