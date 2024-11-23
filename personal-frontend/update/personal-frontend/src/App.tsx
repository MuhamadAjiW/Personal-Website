import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Config } from "./util/config";
import Home from "./pages/home";

ReactGA.initialize(Config.GA_CODE);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
