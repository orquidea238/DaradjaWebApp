const os = require('os');

// apiKey = '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'
module.exports = {
  env: 'localhost',

  database: {
    // connection:
    //   'mongodb://localhost:27017,localhost:27018,localhost:27019/development?replicaSet=rs',
    // transactions: true,
    connection: 'mongodb://localhost:27017/development',
    transactions: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<votre email>',
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: '<votre clé API ici>',
    },
  },

  graphiql: true,

  clientUrl:
    'http://localhost:3000',

  defaultUser: '<votre email>',

  uploadDir: os.tmpdir(),

  authJwtSecret: 'secret',
};
