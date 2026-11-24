import html_logo from '../assets/html.png'
import css_logo from '../assets/css.png'
import js_logo from '../assets/js.png'
import react_logo from '../assets/react.png'
import tailwind_logo from '../assets/tailwind.png'
import c_logo from '../assets/c.png'

function Skills(){
    return <>
    <div className="text-white text-4xl md:text-5xl font-bold text-center">My Skills</div>
    <div className="grid md:grid-cols-3 gap-x-50 gap-y-10 place-items-center max-w-3xl mx-auto ">
        <div className="text-white h-50 w-45 bg-zinc-700 flex flex-col items-center p-5 gap-5 rounded-[10px] ">
            <img src={html_logo} alt="html-logo" className='h-30 w-30' />
            <p className='text-lg font-bold'>HTML</p>
        </div>
        <div className="text-white h-50 w-45 bg-zinc-700 flex flex-col items-center p-5 gap-5 rounded-[10px] ">
            <img src={css_logo} alt="html-logo" className='h-30 w-30' />
            <p>CSS</p>
        </div>
        <div className="text-white h-50 w-45 bg-zinc-700 flex flex-col items-center p-5 gap-5 rounded-[10px] ">
            <img src={js_logo} alt="html-logo" className='h-30 w-30' />
            <p>JS</p>
        </div>
        <div className="text-white h-50 w-45 bg-zinc-700 flex flex-col items-center p-5 gap-5 rounded-[10px] ">
            <img src={react_logo} alt="html-logo" className='h-30 w-30' />
            <p>React</p>
        </div>
        <div className="text-white h-50 w-45 bg-zinc-700 flex flex-col items-center p-5 gap-5 rounded-[10px] ">
            <img src={tailwind_logo} alt="html-logo" className='h-30 w-30' />
            <p>Tailwind CSS</p>
        </div>
        <div className="text-white h-50 w-45 bg-zinc-700 flex flex-col items-center p-5 gap-5 rounded-[10px] ">
            <img src={c_logo} alt="html-logo" className='h-30 w-30' />
            <p>C</p>
        </div>
    </div>
    </>
}

export default Skills;