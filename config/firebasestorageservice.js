const fs = require("fs");
const { promisify } = require("util");

const unlinkAsync = promisify(fs.unlink);

const { bucket } = require("./firebaseadminsetup");
const { getDownloadURL } = require("firebase-admin/storage");
const getFirebaseImageUrl = async (destinationName, filePath, fileName) => {
  const remoteFilePath = `${destinationName}/${fileName}`;
  const [uploadFile] = await bucket.upload(filePath, {
    destination: remoteFilePath,
  });

  const imageUrl = await getDownloadURL(uploadFile);
  await unlinkAsync(filePath);

  return imageUrl;
};
module.exports = getFirebaseImageUrl;
