import Hapi from 'hapi';

const server = Hapi.Server({
    port: 3000,
    host: 'localhost',
});

const register = async () => {
    await server.register([
        /* eslint-disable global-require */
        require('./plugins/home'),
    ]);
};

const startServer = async () => {
    await register();
    await server.start();
    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
};

const getServer = async () => {
    await register();
    return server;
};

export {
    startServer,
    getServer,
};
