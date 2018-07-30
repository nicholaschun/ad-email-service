exports.plugin = {
    name: 'home',
    version: '1.0.0',
    register: async (server) => {
        server.route({
            method: 'GET',
            path: '/',
            handler: () => 'Ad-Email Service',
        });
    },
};
