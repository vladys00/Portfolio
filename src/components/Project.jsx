import React from "react";
import { useState } from "react";
function Project({
  folderName,
  carouselImages,
  link,
  name,
  description,
  techStack,
  githubRepo,
  imageUrl,
  liveDemo,
  frontImage,
  tags,
  shortDescription,
}) {
  const [dropDown, useDropDown] = useState(false);
  return (
    <div className=" w-[340px]  sm:w-auto lg:w-[400px] flex flex-col mb-3 ">
      <a href={link} className="rounded-lg overflow-hidden mt-4 lg:w-[400px] relative w-full h-full group">
        <img  className="w-[400pxs] w-full h-full object-cover" src={frontImage} alt="image of project" />
        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </a>
      <div className="p-2  ">
        <h2 className="font-bold hover:text-blue-400"><a href={liveDemo}>{name}</a></h2>
        <p className="pe-1 mt-1 w-[350px]">{shortDescription}</p>
      </div>
      
      <div className="flex flex-wrap mt-[auto]">
        {tags.map((tag, index)=><div className={`px-4 py-1 me-2 mt-2 ${index === 0 ? "border border-black" :"border border-black rounded-[24px]" } `}>{tag}</div>)}
      </div>

      
    </div>
  );
}
export default Project;
