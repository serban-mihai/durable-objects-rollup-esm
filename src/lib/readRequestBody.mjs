// AUX | Helper Functions
export const readRequestBodyJson = async (request) => {
  const { headers } = request;
  const contentType = headers.get("Content-type") || "";
  if (contentType.includes("application/json")) {
    return await request.json();
  } else {
    const myBlob = await request.blob();
    const objectURL = URL.createObjectURL(myBlob);
    return objectURL;
  }
};

export const readRequestBodyText = async (request) => {
  const { headers } = request;
  const contentType = headers.get("Content-type") || "";
  if (contentType.includes("application/json")) {
    return await request.text();
  } else {
    const myBlob = await request.blob();
    const objectURL = URL.createObjectURL(myBlob);
    return objectURL;
  }
};
