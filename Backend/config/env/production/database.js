// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       socketPath: env('INSTANCE_UNIX_SOCKET'),
//       database: env('DB_NAME'),
//       user: env('DB_USER'),
//       password: env('DB_PASS'),
//     }
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),

      // host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
      //     database: env('DATABASE_NAME'),
      //     user: env('DATABASE_USERNAME'),
      //     password: env('DATABASE_PASSWORD'),
      // ssl: {
      //   rejectUnauthorized: false
      // },
    },
    debug: false,
  },
});