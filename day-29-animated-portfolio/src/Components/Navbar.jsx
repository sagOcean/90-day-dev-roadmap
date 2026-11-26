import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'


function Navbar(){
    return <>
    <div className="navbar flex justify-between px-10 py-3">
        <div className="logo text-lg font-bold flex gap-2">
          <span className="text-teal-500 font-bold">&lt;/&gt;</span>
          <span className="text-xl text-white">Sagar Trital</span>
        </div>
        <div className="nav-elem flex gap-8 text-white text-[1.2rem] justify-center  ">
          <div ><a href="#projects">Projects</a></div>
          <div ><a href="#about">About</a></div>
          {/* <div id="#contact">Contact</div> */}
          <div className='h-8 w-8  '>
            <a href="https://www.linkedin.com/in/sagar-trital-b280a841b" target='_blank' rel="noopener noreferrer"><img src={linkedin}alt="linkedin" className='invert' /></a>
          </div>
          <div className='h-8 w-8'>
            <a href="https://github.com/sagOcean"target='_blank' rel="noopener noreferrer"><img src={github} alt="github"  /></a>
          </div>
        </div>
      </div>
    </>
}

export default Navbar;