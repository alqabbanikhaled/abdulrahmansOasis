'use strict';

/**
 * contact router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact.contact', {
    config: {
        find: {
        },
        findOne: {
        },
        create: {
            policies: [{
                name: 'global::recaptcha',
            },
            {
                name: "plugins::users-permissions.ratelimit"
            }],
        },
        update: {
            policies: [{
                name: 'global::recaptcha',
            }],
        },
        delete: {
            policies: [{
                name: 'global::recaptcha',
            }],
        },
    },
});
