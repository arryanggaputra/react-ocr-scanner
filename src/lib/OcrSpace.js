const OcrSpace = async imageUrl => {
  let endpoint = "https://api.ocr.space/parse/imageurl";
  let parameter = {
    apikey: "c0f9fa7e4688957",
    url: imageUrl,
    language: "eng",
    isOverlayRequired: "true",
    OCREngine: 2
  };
  let url = new URL(endpoint);
  url.search = new URLSearchParams(parameter);

  let doRequest = await fetch(url, {
    method: "GET",
    mode: "cors",
    parameter: JSON.stringify(parameter)
  });
  let result = await doRequest.json();
  return result;
};

export default OcrSpace;
