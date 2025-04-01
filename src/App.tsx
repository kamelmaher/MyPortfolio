import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import "./App.css"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Conteact/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
    <Box
      margin={{ xs: "0 30px", md: "0 150px" }}
    >
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
