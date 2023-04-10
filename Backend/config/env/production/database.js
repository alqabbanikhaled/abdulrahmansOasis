// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),

      // host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      //     datab ase: env('DATABASE_NAME'),
      //     user: env('DATABASE_USERNAME'),
      //     password: env('DATABASE_PASSWORD'),
      // ssl: {
      //   rejectUnauthorized: false
      // },
    },
    debug: false,
  },
});

// const path = require("path");

// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });
