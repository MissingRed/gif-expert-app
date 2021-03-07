import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h3>Resultados de: {category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
