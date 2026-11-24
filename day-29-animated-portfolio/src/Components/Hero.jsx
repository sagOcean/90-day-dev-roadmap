import my_img from "../assets/myImg.png";

function Hero() {
  return (
    <>
      <div className="min-h-screen bg-[#1e2a40] flex items-start justify-center">
        <div className="w-full max-w-6xl mx-[3rem]  px-3 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-white font-bold text-4xl md:text-8xl">
              Hi, I am Sagar.
            </h1>

            <p className="text-slate-400 font-medium text-lg max-w-md">
              Full stack developer building scalable APIs, SaaS products and
              AI-integrated web apps.
            </p>
          </div>

          {/* Image section */}
          <div className="flex justify-center md:justify-center">
            <img
              src={my_img}
              alt="my_image"
              className="h-auto max-h-[40rem] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
