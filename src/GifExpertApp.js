import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["Coding"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Naruto"]);
  // };

  return (
    <>
      <div className="navbar">
        <h1>Gif Expert</h1>
      </div>
      <AddCategory setCategories={setCategories} />
      <ul className="gif__list">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
