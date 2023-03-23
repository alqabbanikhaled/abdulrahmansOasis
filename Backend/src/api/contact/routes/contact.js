'use strict';

/**
 * contact router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact.contact', {
    config: {
        find: {
            policies: [{
                name: 'global::recaptcha',
            }],
        },
        findOne: {
            policies: [{
                name: 'global::recaptcha',
            }],
        },
        create: {
            policies: [{
                name: 'global::recaptcha',
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
