const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const request = require("request-promise");

const s3 = new AWS.S3({
  accessKeyId: "***",
  secretAccessKey: "**",
});
const width = 200;
const height = 200;
const bucket = "**";

module.exports.UploadImage = async (event, context, callback) => {
  let requestBody = JSON.parse(event.body);
  let photoUrl = requestBody.photoUrl;
  let objectId = uuidv4();
  let objectKey = `resize-${width}x${height}-${objectId}.png`;
   
  var options = {
    uri: photoUrl,
    encoding: null,
  };
  const body = await request(options);
  const uploadResult = await uploadToS3(body, objectKey)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(uploadResult),
  });
};

/**
 * @param {*} data
 * @param {string} key
 */
async function uploadToS3(data, key) {
  return await s3
  .upload({
    Bucket: bucket,
    Key: key,
    Body: data,
    ContentType: "image/png",
    ACL: "public-read",
  })
  .promise();
}
