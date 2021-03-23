const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

module.exports = () => {
  const start = async ({ config }) => {
    const { core: coreConfig, bucketName } = config;
    const client = new S3Client(coreConfig);

    const getObject = (key) =>
      client.send(
        new GetObjectCommand({
          Bucket: bucketName,
          Key: key,
        })
      );

    return {
      getObject,
    };
  };

  return { start };
};
