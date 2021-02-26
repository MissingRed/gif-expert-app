import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Naruto"]);
  // };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
