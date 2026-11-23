import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-slate-800 px-5 py-2 ">
      {/* navbar */}
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      



    </div>
      
    </>
  )
}

export default App
