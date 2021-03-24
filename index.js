const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');

module.exports = () => {
  const start = async ({ config }) => {
    const client = new S3Client(config);

    const listBucket = () => client.send(new ListBucketsCommand({}));

    return {
      client: client,
      listBucket,
    };
  };

  return { start };
};
