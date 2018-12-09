/*
*  This is a dynamic content generator to be served up as a mock API by json-server.
*  To run this file manually as a fake backend server, first install its dependencies:
*     $ npm install
*  Then run the server from the project's root directory using the following command:
*     $ json-server src/api/MockBackend.js
*  Alternatively, you can start both the fake backend server and the frontend server in development mode with:
*     $ npm start
*/

module.exports = () => {
  const chance = require('chance').Chance();

  const generateCase = () => {
    return {
      id: chance.hash({length: 15}),
      name: chance.company(),
      title: chance.sentence(),
      image: `https://picsum.photos/1400/940/?image=${chance.integer({min: 0, max: 1084})}`
    }
  };

  return {
    cases: new Array(100).fill({}).map(_ => generateCase())
  };
};