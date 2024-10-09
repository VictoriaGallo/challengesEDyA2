

const getGifs = async ( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6StSqEUNlhm13m7XuDEGbwGPVViWxUHq&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifts = data.map (img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifts

}

import { useState, useEffect } from 'react'; 

export function GifGrid({ category }) {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const images = await getGifs(category)
        setImages(images)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image, key) => (
                    <GifItem key={key} {...image} ></GifItem>
                ))}
            </div>
        </>
    )
}


import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image, key) => {
          return <GifItem key={key} {...image} />;
        })}
      </div>
    </>
  );
};