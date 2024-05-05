import React, { useState } from "react";
import ImageSkeleton from "./ImageSkeleton";
export default function ImageCard({ id, url, height, innerRef }) {
  const [loaded, setLoaded] = useState(false);
  // console.log("height", height)
  return (
    <div className="link-container">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          {!loaded && <ImageSkeleton imageHeight={height} />}

          <img
            id={id}
            src={url}
            alt="img"
            onLoad={() => {
              console.log("loaded");
              setLoaded(true);
            }}
            style={{ display: loaded ? "block" : "none" }}
          />
        </div>
      </a>
    </div>
  );
}
