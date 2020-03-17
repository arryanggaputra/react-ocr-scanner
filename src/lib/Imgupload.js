const Imgupload = async body => {
  let doRequest = await fetch("https://crimesocial.web.id/testingimage", {
    method: "POST",
    body: body
  });
  let result = await doRequest.json();
  return result;
};

export default Imgupload;
