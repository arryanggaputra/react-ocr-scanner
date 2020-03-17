import React from "react";
import Boxi from "./Boxi";

function OcrResultOverlay(props) {
  let imageData = props.data;
  let textOverlay = imageData.ParsedResults[imageData.ParsedResults.length - 1];

  let result = textOverlay.TextOverlay.Lines.filter(
    item => !isNaN(parseInt(item.LineText))
  );

  const renderBoxy = () => {
    let boxies = [];
    result.map(item => {
      boxies.push(
        <Boxi
          onClick={() => {
            props.onBoxiClick(item.LineText);
          }}
          key={item.LineText}
          {...item.Words[item.Words.length - 1]}
        />
      );
    });
    return boxies;
  };

  return (
    <div className="text-xs bg-gray-200 rounded-lg p-2 mb-3 break-all">
      <div className="relative">
        <img src={props.imageUrl} alt={props.imageUrl} />
        {renderBoxy()}
      </div>
    </div>
  );
}

export default React.memo(
  OcrResultOverlay,
  (prevProps, nextProps) =>
    prevProps.data.ParsedResults.length === nextProps.data.ParsedResults.length
);
