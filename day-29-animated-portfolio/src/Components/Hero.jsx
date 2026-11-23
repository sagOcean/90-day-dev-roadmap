import my_img from '../assets/myImg.png'


function Hero(){
    return <>
        <div className=" grid md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-left">
                <div className="text-white font-bold text-5xl">Hi, I am Sagar.</div>
                <p className='text-slate-400 font-medium'>Full stack developer building scalable APIs, SaaS products and AI-integrated web apps.</p>

            </div>
            <img src={my_img} alt="my_image" />
        </div>



    </>
}
export default Hero;