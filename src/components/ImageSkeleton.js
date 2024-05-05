import React from "react";

export default function ImageSkeleton({imageHeight}) {
  const height = imageHeight || 950 
  
  return (
    <div className="image-skeleton" style={{ height: `${height}px`}}>
      <div className="skeleton-image">
      </div>
    </div>
  );
}
