import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";

import { faLink, faRobot } from "@fortawesome/free-solid-svg-icons";

const OPTIONS = [
  {
    icon: faBookmark,
    text: "Save image",
    action: (methods) => {
      // download image and delete anchor tag after download
      const link = document.createElement("a");
      link.href = methods.currentImage.url;
      link.download = methods.currentImage.id + ".png";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      // document.body.removeChild(link);
    },
  },
  {
    icon: faLink,
    text: "Copy Link",
    action: (methods) => {
      navigator.clipboard.writeText(methods.currentImage.url);

    }
  },
  {
    icon: faRobot,
    text: "Usar Prompt",
    action: (methods) => {
      if(methods.currentImage?.meta?.prompt){
        window.open("https://chat.openai.com/?model=gpt-4&q=Generate a image: "+methods.currentImage.meta.prompt, "_blank");
      }else{
        alert("No prompt found for this image");
      }
    }
  },
  {
    icon: faEyeSlash,
    text: "Hide this image",
    action: (methods) => {
      methods.setHideImage(methods.currentImage.id);
    },
  },
];

export default function Menu(props) {
  return (
    <div id="menu">
      {OPTIONS.map((option, index) => (
        <button
          key={index}
          className="image-menu-option"
          onClick={() => option.action(props)}
        >
          <div className="image-menu-option-icon">
            <FontAwesomeIcon icon={option.icon} />
          </div>
          <div className="image-menu-option-text">{option.text}</div>
        </button>
      ))}
    </div>
  );
}
