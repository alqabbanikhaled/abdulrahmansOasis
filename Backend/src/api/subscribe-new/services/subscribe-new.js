'use strict';

/**
 * subscribe-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subscribe-new.subscribe-new');
