const system = require('../system');

module.exports = async () => {
	const workers = parseInt(process.env.JEST_WORKERS || '1', 10);

	const sys = system();
	const { pg } = await sys.start();

	for (let i = 0; i < workers; i += 1) {
		const workerTestDb = `test_${i}`;
		// eslint-disable-next-line no-await-in-loop
		await pg.query(`DROP DATABASE IF EXISTS ${workerTestDb};`);
		// eslint-disable-next-line no-await-in-loop
		await pg.query(`CREATE DATABASE ${workerTestDb} TEMPLATE postgres;`);
	}
	await sys.stop();
};
