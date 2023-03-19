// // module.exports = ({ env }) => ({
// //   host: env('HOST', '0.0.0.0'),
// //   port: env.int('PORT', 1337),
// //   app: {
// //     keys: env.array('APP_KEYS'),
// //   },
// //   webhooks: {
// //     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
// //   },
// // });
// module.exports = ({ env }) => ({
//   host: env.HOST,
//   port: env.PORT,
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// }); 

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    keys: env.array("APP_KEYS", [
      "89/D6D1u1+WUof4bIslkYA==",
      "OCiAS3aUr5+41AyBqvuCnQ==",
      "B3hijcbxalRmaE8nNoOw+g==",
      "KJRe8tcpmnepTtW1XirZpA==",
    ]),
  },
});
