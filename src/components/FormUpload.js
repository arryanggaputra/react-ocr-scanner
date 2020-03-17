import React, { useEffect, useState } from "react";
import Imgupload from "../lib/Imgupload";

function FormUpload(props) {
  const [loading, setLoading] = useState(false);

  const doUpload = async () => {
    setLoading(true);
    let imgInput = document.querySelector("#image-input");

    const fd = new FormData();
    fd.append("image", imgInput.files[0]);

    let w = await Imgupload(fd);
    let fileUrl = `http://34.67.235.246:8888/unsafe/600x600/${w.file}`;

    setLoading(false);
    props.onSuccess(fileUrl);
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded p-3 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="image"
            id="image-input"
            type="file"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            disabled={loading}
            onClick={doUpload}
            className={`${
              loading ? "bg-gray-400" : " bg-green-500"
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="button"
          >
            {loading ? "Loading..." : `Upload File`}
          </button>
        </div>
      </div>
    </div>
  );
}
export default FormUpload;
