// import my_img from "../assets/myImg.png";
import ghibli_img from "../assets/ghibli.png"

function About() {
  return (
    <>
      {/* <div className="grid md:grid-cols-[350px_1fr]  items-start gap-8 mx-8">
        <img src={my_img} alt="my_image" className="h-100 w-80 object-cover mx-5"/>
        <div className="flex flex-col gap-10 justify-center">
          <h1 className="text-white text-5xl ">A little about me</h1>
          <p className="text-slate-400 text-justify ">
            Hi, I’m Sagar Trital—a Full Stack Developer who loves turning complex
            problems into simple, functional, and well-designed software.
            Whether I’m architecting a database schema or fine-tuning a CSS
            animation, I care deeply about the entire lifecycle of a product.  I
            focus on writing clean, maintainable code that doesn't just work
            under the hood, but actually feels great for the end user to
            interact with. Currently, I’m focused on building with TypeScript, React, Node.js, and PostgreSQL. When I’m
            not coding, you can usually find me contributing to open-source
            tools, exploring new web frameworks, or just watching anime.
            Check out my featured projects below, or drop me a message if you’d
            like to build something together!
          </p>
        </div>
      </div> */}
      <div className="min-h-screen flex items-center justify-center px-6 py-12" id="about">
        <div
          className="w-full max-w-6xl grid md:grid-cols-2 
                  bg-[#1e2a40] rounded-3xl p-3 gap-10"
        >
          {/* Image section */}
          <div
            className="relative  rounded-2xl 
                    overflow-hidden min-h-[600px] flex justify-center "
          >
            <img
              src={ghibli_img}
              alt="my_image"
              className="h-full w-full object-contain object-bottom"
            />
          </div>

          {/* Description section */}
          <div
            className="flex flex-col justify-center 
                    px-8 md:px-12 py-12"
          >
            <div className="max-w-xl flex flex-col gap-6">
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                A little about me
              </h1>

              <p className="text-slate-400 leading-relaxed font-medium text-base 
              md:text-lg ">
                Hi, I’m Sagar Trital—a Full Stack Developer who loves turning
                complex problems into simple, functional, and well-designed
                software. Whether I’m architecting a database schema or
                fine-tuning a CSS animation, I care deeply about the entire
                lifecycle of a product. <br></br> <br></br> I focus on writing clean, maintainable
                code that doesn't just work under the hood, but actually feels
                great for the end user to interact with. Currently, I’m focused
                on building with TypeScript, React, Node.js, and PostgreSQL.<br></br><br></br>
                When I’m not coding, you can usually find me contributing to
                open-source tools, exploring new web frameworks, or just
                watching anime. Check out my featured projects below, or drop me
                a message if you’d like to build something together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
