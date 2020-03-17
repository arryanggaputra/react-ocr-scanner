import React, { useState, useEffect } from "react";
import ImageThumbnail from "../components/ImageThumbnail";
import OcrSpace from "../lib/OcrSpace";
import OcrResult from "../components/OcrResult";
import ReactLoading from "react-loading";

function Home(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [ocrResult, setOcrResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSetImageUrl = url => {
    setOcrResult(null);
    setImageUrl(url);
  };

  useEffect(() => {
    if (imageUrl === "") return;

    const doOcrScanning = async () => {
      setLoading(true);
      let request = await OcrSpace(imageUrl);
      setLoading(false);
      setOcrResult(request);
    };

    doOcrScanning();
  }, [imageUrl]);

  return (
    <div className="lg:max-w-6xl max-w-full m-auto flex items-baseline mt-2">
      <div className="w-3/12 p-3">
        <h1 className="block mb-2 font-bold text-2xl border-b">
          Sample Receipts
        </h1>
        <ImageThumbnail
          onClick={onSetImageUrl}
          imageUrl="https://telegra.ph/file/6b37166d03088e2616fec.jpg"
        />
        <ImageThumbnail
          onClick={onSetImageUrl}
          imageUrl="https://telegra.ph/file/bddff6eedd979a201d5f9.jpg"
        />
      </div>
      <div className="w-9/12 p-3 ">
        <h1 className="block mb-2 font-bold text-2xl border-b">
          OCR Scanning Result
        </h1>

        {loading && (
          <div className="flex items-center justify-center h-64 py-20">
            <ReactLoading
              type={"spin"}
              color={"black"}
              height={50}
              width={50}
            />
          </div>
        )}

        {ocrResult !== null && (
          <OcrResult data={ocrResult} imageUrl={imageUrl} />
        )}
      </div>
    </div>
  );
}

export default Home;
