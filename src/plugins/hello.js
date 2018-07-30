exports.plugin = {
    pkg: require('../../package.json'), // eslint-disable-line global-require
    register: async (server) => {
        server.route({
            method: 'GET',
            path: '/',
            handler: () => 'Hello, world!',
        });
    },
};
