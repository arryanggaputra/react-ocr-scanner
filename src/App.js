import React from "react";
import Home from "./containers/Home";

function App() {
  return (
    <div>
      <div className=" py-3 md:shadow-md">
        <div className="lg:max-w-6xl max-w-full m-auto flex items-center ">
          <span className="font-bold ml-4 lg:ml-0 mr-4 font-poppins text-3xl tracking-tight">
            OCR Scanner
          </span>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
