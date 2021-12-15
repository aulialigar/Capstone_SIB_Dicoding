const {getAllDataHandler} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getAllDataHandler,
  },
];

module.exports = routes;
