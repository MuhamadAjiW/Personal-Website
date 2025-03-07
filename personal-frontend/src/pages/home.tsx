import Navbar from "../components/Navbar/Navbar"
import { DarkModeProvider } from "../context/DarkModeContext";
import { ToastProvider } from "../context/ToastContext";
import Hello from "../panels/Hello/Hello";
import Personal from "../panels/Personal/Personal";
import Section from "../panels/Section/Section";
import Contact from "../panels/Contact/Contact";
import Showcase from "../panels/Showcase/Showcase";
import Message from "../panels/Message/Message";
import { LoadingProvider } from "../context/LoadingContext";

function Home() {  
  return (
    <>
      <DarkModeProvider>
        <LoadingProvider>
        <ToastProvider>
          <Navbar/>

          <Hello panelNum={0} id="home"/>
          <Personal panelNum={1} id="about"/>
          <Showcase panelNum={2} title="My Face" desc="This is me, I don't hide my face too often. I've done some other things too:\n- I hold a position in my major's student union's representative board\n- I volunteered quite often in university and union activities\n- I work as a lab assistant in parallel and distributed systems lab\n- I also play the guitar and piano, I guess?" show_path="/images/face.png" />
          <Showcase panelNum={3} title="Blog" desc="Blogposts under construction" show_path="/images/personal.png" />
          <Section panelNum={4} id="porto" title="Things I've made" subtitle="Nothing particularly impressive but whatever" header={true}/>
          <Showcase panelNum={5} title="Game 1" desc="A simple arcade game made in godot (with horrendous code ofc). I actually have remade the game mechanics in unity and am planning to develop it further (if I'm in the mood that is). \n Oh also the visuals are not mine they are my friend's." show_path="/gif/game.gif" />
          <Showcase panelNum={6} title="Chuu" desc="A from-scratch multitasking x86 operating system with (limited) graphical interface. Not as complex as you might think, check out the source-code on my github at OS-Personal.\nMostly done by myself though, so that's that." show_path="/gif/chuu.gif" />
          <Showcase panelNum={7} title="Cashoria" desc="A Java based desktop app using Swing for cashier/restaurant management. The app supports plugins and is quite extensible.\nThis is a group project so don't give me all the credit. See the name of the other members at the start of the gif." show_path="/gif/javapp.gif" />
          <Showcase panelNum={8} title="Bacaa" desc="A Web based app for audiobooks. The app is made using microservices architecture with PHP, express, react, and java.\nThis is a group project so don't give me all the credit. Though you have to look at my github to see the other members." show_path="/gif/bacaa.gif" />
          <Showcase panelNum={9} title="This website" desc="Well? I made it myself using react and tailwind and no other frontend related libraries. Still buggy and not very impressive, I am still working on it lol." show_path="/gif/personal.gif" />
          <Section panelNum={10} title="And more of course" subtitle="Check out my github!" header={false}/>
          <Contact panelNum={11} id="contact"/>
          <Message panelNum={12}/>
      
        </ToastProvider>
        </LoadingProvider>
      </DarkModeProvider>
    </>
  )
}

export default Home
