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
    <div className=" w-[340px] sm:w-auto lg:flex">
      <div className="rounded-lg overflow-hidden mt-4 lg:w-[50%] lg:me-3">
        <img src={frontImage} alt="image of project" />
      </div>
      <div className="p-2 lg:w-[50%]">
        <h2 className="font-bold">{name}</h2>
        <p className="mt-2">{shortDescription}</p>
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag, index)=><div className={`px-4 py-1 me-2 mt-2 ${index === 0 ? "border border-black" :"border border-black rounded-[24px]" } `}>{tag}</div>)}
      </div>
    </div>
  );
}
export default Project;

{
  /* <div className=" w-[340px] sm:w-auto lg:flex">
<div className="rounded-lg overflow-hidden mt-4 lg:w-[50%] lg:me-3">
  <img src={frontImage} alt="image of project" />
</div>
<div className="p-2 lg:w-[50%]">
  <h2 className="font-bold">{name}</h2>
  <div className="break-words mt-1 lg:mt-4">
    <h4 className="flex items-center">
    <img src="/document.svg" className="w-[13px] me-2" alt="Document" />
      Description
    </h4>
    <p className="mt-2">{shortDescription}</p>
  </div>
  <div className="break-words mt-2 lg:mt-4">
    <h4 className="flex justify-between">
      <div className="flex items-center">
      <img src="/gear.svg" className="w-[18px] me-1" alt="Gear" />
        Tech Stack
      </div>
      <button className="drop-down" onClick={()=>useDropDown(!dropDown)}>
        <img
          className="w-[20px] me-3"
          src="/arrow-down.svg"
          alt="arrow down"
        />
      </button>
    </h4>
    <ul id="tech-stack" className={dropDown ? "":"hidden"}>
      {techStack.map((el) => (
        <li>· {el}</li>
      ))}
    </ul>
  </div>
  <div className="break-words mt-1 lg:mt-4">
    <h4 className="flex items-center">
    <img src="/link.svg" className="w-[15px] me-2" alt="Link" />
      Links
    </h4>
    <ul className="flex mt-2">
      <li className="me-2 hover:text-sky-400">
        <a href={githubRepo}>GitHub</a>
      </li>
      <li className="hover:text-sky-400">
        <a href={liveDemo}>· Website</a>
      </li>
    </ul>
  </div>
</div>
</div> */
}
