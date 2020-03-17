import React from "react";

function Boxy(props) {
  console.log("render", props);
  return (
    <div
      onClick={props.onClick}
      className="absolute inline-block border-2 border-yellow-500 shadow-md cursor-pointer bg-transparent"
      style={{
        width: `${props.Width}px`,
        height: `${props.Height}px`,
        top: `${props.Top}px`,
        left: `${props.Left}px`
      }}
    ></div>
  );
}

export default React.memo(
  Boxy,
  (prevProps, nextProps) => prevProps.Top === nextProps.Top
);
