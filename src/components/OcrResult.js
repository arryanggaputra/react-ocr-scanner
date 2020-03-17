import React, { useState } from "react";
import OcrResultJson from "./OcrResultJson";
import OcrResultOverlay from "./OcrResultOverlay";
import SweetAlert from "sweetalert-react";

function OcrResult(props) {
  const [viewOption, setViewOption] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [boxiValue, setBoxiValue] = useState("");

  const onBoxiClick = value => {
    setBoxiValue(value);
    setShowModal(true);
  };

  return (
    <>
      <SweetAlert
        show={showModal}
        title={boxiValue}
        onConfirm={() => setShowModal(false)}
      />

      <div className="flex full-width justify-center items-center mb-2">
        <button
          onClick={() => setViewOption(1)}
          className={`inline-block ${
            viewOption === 1 ? "bg-green-600" : "bg-gray-300 hover:bg-gray-500"
          } text-gray px-2 py-1 rounded-sm mx-1 focus:outline-none`}
        >
          Image Overlay
        </button>
        <button
          onClick={() => setViewOption(2)}
          className={`inline-block ${
            viewOption === 2 ? "bg-green-600" : "bg-gray-300 hover:bg-gray-500"
          } text-gray px-2 py-1 rounded-sm mx-1 focus:outline-none`}
        >
          JSON Preview
        </button>
      </div>

      {viewOption === 1 && (
        <OcrResultOverlay
          onBoxiClick={onBoxiClick}
          data={props.data}
          imageUrl={props.imageUrl}
        />
      )}
      {viewOption === 2 && <OcrResultJson data={props.data} />}
    </>
  );
}

export default OcrResult;
