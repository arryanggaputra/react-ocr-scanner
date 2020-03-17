import React from "react";

function ImageThumbnail(props) {
  const setImage = () => {
    props.onClick(props.imageUrl);
  };

  return (
    <div
      onClick={setImage}
      className="p-2 w-1/5 lg:w-1/6 mr-2 w-full rounded-lg bg-gray-200 overflow-hidden mb-2 cursor-pointer hover:bg-gray-400"
    >
      <img src={props.imageUrl} alt={props.imageUrl} />
    </div>
  );
}

export default ImageThumbnail;
