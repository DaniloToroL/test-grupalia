import React, { useState, useEffect } from "react";
import "./App.css";
import { getImages } from "./libs/civitai";
import ImageCard from "./components/ImageCard";
import ImageMenu from "./components/ImageMenu";
// import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Menu from "./components/Menu";
import ImageReaction from "./components/ImageReaction";
// import Loader from "./components/Loader";
import ImageSkeleton from "./components/ImageSkeleton";
import { displayMenu } from "./libs/menu";

let ImagesArray = [];
function App() {
  const { ref, inView } = useInView();

  const [images, setImages] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [hiddenImages, sethiddenImages] = useState({});

  useEffect(() => {
    if (ImagesArray.length > 0) return;
    setLoading(true);
    getImages().then((data) => {
      const { items, metadata } = data;
      ImagesArray.push(items);
      ImagesArray = Array.from(new Set(ImagesArray));
      setImages(ImagesArray);
      setNextPage(metadata.nextPage);
      console.log("images 1", images, metadata.nextPage);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("images", images, inView, nextPage);
    if (inView) {
      console.log("fetching next page");
      setLoading(true);
      getImages(nextPage).then((data) => {
        const { items, metadata } = data;
        ImagesArray.push(items);
        ImagesArray = Array.from(new Set(ImagesArray));
        setImages(ImagesArray);
        setNextPage(metadata.nextPage);
        setLoading(false);
      });
    }
  }, [inView]);

  const showMenu = (event, image) => {
    setClickedImage(image);
    displayMenu(event);
  };

  const addImageToHide = (id) => {
    const newHiddenImages = { ...hiddenImages };
    newHiddenImages[id] = !newHiddenImages[id];
    sethiddenImages(newHiddenImages);
  };

  return (
    <div className="App">
      <Menu currentImage={clickedImage} setHideImage={addImageToHide} />
      {images.map((imageArray, index1) => (
        <section className="App-content">
          <div className="gallery">
            {imageArray.map((image, index) => (
              <div
                className={
                  hiddenImages[image.id]
                    ? "image-card-container image-hidden"
                    : "image-card-container"
                }
                key={index}
              >
                <ImageMenu
                  id={index + image.id}
                  key={index + image.id + index1}
                  callback={(event) => showMenu(event, image)}
                />
                <ImageCard
                  id={image.id}
                  key={image.id + image.id}
                  url={image.url}
                  height={
                    image.height * (Math.abs(450 - image.width) / image.width)
                  }
                  width={"100%"}
                />
                <div className="image-footer">
                  <ImageReaction id={image.id} stats={image.stats} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <br />
      <section className="App-content" style={{ width: "100%" }} ref={ref}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="gallery" >
            <ImageSkeleton
              key={index}
              imageHeight={850}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
