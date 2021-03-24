const {
  CreateBucketCommand,
  DeleteBucketCommand,
} = require('@aws-sdk/client-s3');
const s3Module = require('./index')();

describe('Localstack POC tests', () => {
  let s3;

  beforeAll(async () => {
    s3 = await s3Module.start({
      config: {
        forcePathStyle: true,
        region: 'us-east-1',
        endpoint: 'http://localhost:4566',
        credentials: {
          secretAccessKey: 'test',
          accessKeyId: 'test',
        },
      },
    });
  });

  it('list bucket test', async () => {
    const bucketName = 'test';

    await s3.client.send(new CreateBucketCommand({ Bucket: bucketName }));

    const { Buckets: buckets } = await s3.listBucket();
    expect(buckets).toHaveLength(1);
    expect(buckets[0].Name).toBe(bucketName);

    await s3.client.send(new DeleteBucketCommand({ Bucket: bucketName }));
  });
});
