const validator = require('html-validator');
const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync(`${__dirname}/../index.html`).toString();

(async () => {
	await validate(html);
})();

async function validate(data) {
	const options = {
		validator: 'WHATWG',
		data
	};
	const result = await validator(options);
	console.log(result);
	assert.strictEqual(result.isValid, true);
}