/* global describe beforeAll it expect */
/* eslint-disable no-unused-expressions */
const { getServer } = require('../../server');

describe('/', () => {
    let server = {};
    beforeAll(async () => {
        server = await getServer();
    });
    it('should succeed, 200', () => {
        const params = {
            method: 'GET',
            url: '/',
        };
        return server.inject(params)
            .then((response) => {
                expect(response.statusCode).toEqual(200);
            });
    });
});
