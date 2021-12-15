const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  try {
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  } catch (e) {
    console.log(e);
  }
};


init();
