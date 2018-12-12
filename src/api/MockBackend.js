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

  const industries = [
    { name: "Aviation",
      jobs: ["Aircraft Dispatcher", "Aircraft Mechanic", "Airline Pilot", "Flight Attendant"] },
    { name: "Business",
      jobs: ["Financial Advisor", "Insurance Agent", "Investment Banker", "Market Research Analyst"] },
    { name: "Media",
      jobs: ["Freelance Writer", "Human Resources Manager", "Art Director", "Copyright Attorney"] },
    { name: "Medical",
      jobs: ["Lab Technician", "Social Worker", "Stress Reduction Specialist", "Speech Pathologist"] },
    { name: "Service Industry",
      jobs: ["Regulatory Affairs Manager", "Personal Fitness Trainer", "Funeral Director", "Ski Instructor"] },
    { name: "Technology",
      jobs: ["Systems Programmer", "Software Test Engineer", "Security Consultant", "Web Developer"] }
  ];

  const generateCase = () => {
    let industry = chance.pickone(industries);

    return {
      id: chance.hash({length: 15}),
      name: chance.company(),
      title: chance.sentence(),
      image: `https://picsum.photos/800/500/?image=${chance.integer({ min: 0, max: 1084 })}`,
      category: { job: chance.pickone(industry.jobs).toLowerCase(), industry: industry.name.toLowerCase() }
    }
  };

  const cases = Array.from({length: 100}, () => generateCase());
  const jobs = [...new Set(cases.map(c => JSON.stringify(c.category)))].map(job => JSON.parse(job));

  return {
    cases: cases,
    jobs: jobs,
    contact: []
  };
};