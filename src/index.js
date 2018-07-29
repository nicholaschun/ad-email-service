import { startServer } from './server';

startServer();

process.on('unhandledRejection', (err) => {
    console.log(err); // eslint-disable-line no-console
    process.exit(1);
});
