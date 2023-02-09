const aws = require('aws-sdk');

const endpoint = new aws.Endpoint(process.env.BB_ENDPOINT);

const S3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.BB_KEYID,
    secretAccessKey: process.env.BB_APPLICATIONKEY,
  },
});

const uploadFile = async (path, buffer, mimetype) => {
  const archive = await S3.upload({
    Bucket: process.env.BB_BUCKETNAME,
    Key: path,
    Body: buffer,
    ContentType: mimetype,
  }).promise();

  return {
    url: archive.Location,
    path: archive.Key,
  };
};

module.exports = uploadFile;
