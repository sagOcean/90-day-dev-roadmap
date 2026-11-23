import my_img from "../assets/myImg.png";

function About() {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <img src={my_img} alt="my_image" />
        <div className="flex flex-col gap-3">
          <div className="text-white text-2xl ">A little about me</div>
          <p className="text-slate-400">
            Hi, I’m Sagar Trital—a Full Stack Developer who loves turning complex
            problems into simple, functional, and well-designed software.
            Whether I’m architecting a database schema or fine-tuning a CSS
            animation, I care deeply about the entire lifecycle of a product. <br></br> I
            focus on writing clean, maintainable code that doesn't just work
            under the hood, but actually feels great for the end user to
            interact with. Currently, I’m focused on building with TypeScript, React, Node.js, and PostgreSQL.<br></br> When I’m
            not coding, you can usually find me contributing to open-source
            tools, exploring new web frameworks, or just watching anime.
            Check out my featured projects below, or drop me a message if you’d
            like to build something together!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
