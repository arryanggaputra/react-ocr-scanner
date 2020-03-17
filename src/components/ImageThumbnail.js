import React from "react";

function ImageThumbnail(props) {
  const setImage = () => {
    props.onClick(props.imageUrl);
  };

  return (
    <div
      onClick={setImage}
      className="p-2 rounded-lg bg-gray-200 overflow-hidden mb-2 cursor-pointer hover:bg-gray-400"
    >
      <img src={props.imageUrl} alt={props.imageUrl} />
    </div>
  );
}

export default ImageThumbnail;
