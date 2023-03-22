'use strict';

/**
 * latest-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-new.latest-new');
