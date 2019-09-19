module.exports = {
  env: 'production',

  database: {
    connection: 'mongodb://mongo:27017/production',
    transactions: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: false,

  clientUrl:
    'http://localhost:8080',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: 'secret',
};
