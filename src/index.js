import Hapi from 'hapi';

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

const init = async () => {
    await server.register([
        /* eslint-disable global-require */
        require('./plugins/hello'),
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
};

process.on('unhandledRejection', (err) => {
    console.log(err); // eslint-disable-line no-console
    process.exit(1);
});

init();
