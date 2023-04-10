// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    keys: env.array("APP_KEYS", [
      "OlAk1etiMd6zop1mGtG4Jg==",
      "axPpF9JEozFZgPzbyQn6bg==",
      "mws1q8m6i9ZlzykTcKzaAg==",
      "hOaMg6QxiLpzqKgMi9gJ3A==",
    ]),
  },
});
