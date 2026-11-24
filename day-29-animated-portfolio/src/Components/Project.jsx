function Project({ image, title, description }) {
  return (
    <>
        <div className="h-100 w-100 bg-[#263349] flex flex-col items-center p-10 gap-5 rounded-[10px]">
          <img src={image} alt="project-image" className="h-50 w-full text-center" />
          <h2 className="text-white  font-bold">{title}</h2>
          <p className="text-white text-lg">{description}</p>
        </div>
      
    </>
  );
}

export default Project;
