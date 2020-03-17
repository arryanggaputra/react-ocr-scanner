import React, { useState, useEffect } from "react";
import ImageThumbnail from "../components/ImageThumbnail";
import OcrSpace from "../lib/OcrSpace";
import OcrResult from "../components/OcrResult";
import ReactLoading from "react-loading";
import FormUpload from "../components/FormUpload";

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

  const imageSample = [
    "https://telegra.ph/file/6b37166d03088e2616fec.jpg",
    "https://telegra.ph/file/a450a2b013bf24c22d782.jpg",
    "http://34.67.235.246:8888/unsafe/600x600/https://crimesocial.web.id/uploadtesting/vGH4Ruw.jpg",
    "https://telegra.ph/file/bddff6eedd979a201d5f9.jpg"
  ];

  return (
    <div className="lg:max-w-6xl max-w-full m-auto flex flex-col items-baseline mt-2">
      <div className="w-full p-3 flex lg:flex-row flex-col">
        <div className="lg:w-4/12 w-full pr-5">
          <h1 className="block mb-2 font-bold text-2xl border-b">
            Upload Receipts
          </h1>
          <FormUpload onSuccess={onSetImageUrl} />
        </div>

        <div className="lg:w-8/12 w-full ">
          <h1 className="block mb-2 font-bold text-2xl border-b">
            Use sample receipts
          </h1>
          <div className="flex flex-row">
            {imageSample.map(item => {
              return <ImageThumbnail onClick={onSetImageUrl} imageUrl={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full p-3 ">
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
