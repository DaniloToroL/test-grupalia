import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ImageMenu({ id, callback }) {
  return (
    <>
      <div className="image-menu">
        <div className="image-menu-icon">
          <div onClick={(event) => callback(event, id)} className="ellipsis-icon">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </>
  );
}
