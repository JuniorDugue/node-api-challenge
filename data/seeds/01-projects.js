exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { //follow the rules when updating, making sure to include e.g. "name", "description", 
      name: 'Complete Node.js and Express Challenge',
      description:
        'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
    },
  ]);
};
