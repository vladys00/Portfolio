import React from "react";
import { useState } from "react";
function Project({
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
    <div className=" w-[340px]  sm:w-auto lg:w-[400px] flex flex-col ">
      <div className="rounded-lg overflow-hidden mt-4 lg:w-[400px]">
        <img  className="w-[400pxs]" src={frontImage} alt="image of project" />
      </div>
      <div className="p-2  ">
        <h2 className="font-bold">{name}</h2>
        <p className="pe-1 mt-1 w-[350px]">{shortDescription}</p>
      </div>
      
      <div className="flex flex-wrap mt-[auto]">
        {tags.map((tag, index)=><div className={`px-4 py-1 me-2 mt-2 ${index === 0 ? "border border-black" :"border border-black rounded-[24px]" } `}>{tag}</div>)}
      </div>

      
    </div>
  );
}
export default Project;
