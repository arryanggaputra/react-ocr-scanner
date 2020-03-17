import React from "react";

function OcrResultJson(props) {
  return (
    <div className="text-xs bg-gray-200 rounded-lg p-2 mb-3 break-all">
      <pre
        style={{
          wordWrap: "break-word"
        }}
      >
        {JSON.stringify(props.data.ParsedResults, null, 2)}
      </pre>
    </div>
  );
}

export default OcrResultJson;
