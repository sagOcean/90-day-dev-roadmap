import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import memeKit from './assets/meme-kit.png'
import coffeeWeb from './assets/coffee-website.png'
import weatherCard from './assets/weather-card.png'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-slate-800  pt-2 flex flex-col gap-10 w-full">
      {/* navbar */}
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      {/* Projects */}
      <h1 className="text-white text-3xl  font-bold text-center">Featured Projects</h1>
      <div className='grid md:grid-cols-3 gap-auto px-15'>

      <Project image={memeKit} title="Meme kit" description="A simple meme kit made using HTML,CSS and JS" ></Project>
      <Project image={weatherCard} title="Weather card" description="A simple weather card made using HTML,CSS and JS" ></Project>
      <Project image={coffeeWeb} title="Coffee website" description="A simple coffee website made using HTML,CSS and JS" ></Project>
      </div>

      {/* Footer */}
      <Footer></Footer>
      



    </div>
      
    </>
  )
}

export default App
