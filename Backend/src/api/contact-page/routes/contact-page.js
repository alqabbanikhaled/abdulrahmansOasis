'use strict';

/**
 * contact-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-page.contact-page', {
    config: {
        create: {
            policies: [
                // point to a registered policy
                "global::recaptcha",

                // pass a policy implementation directly
                (policyContext, config, { strapi }) => {
                    return true;
                },
            ]
        }
    }
});
