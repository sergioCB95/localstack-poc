const waitOn = require('wait-on');

module.exports = async () => {
  await waitOn({
    resources: ['http://localhost:4566/health'],
    timeout: '10000',
  });
};
