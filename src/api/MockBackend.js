/*
*  This is a dynamic content generator to be served up as a mock API by json-server.
*  To run this file as a fake backend server, first install its dependencies:
*     $ npm install
*  Next, navigate into its directory:
*     $ cd src/api
*  Then run the server using the following command:
*     $ json-server MockBackend.js
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