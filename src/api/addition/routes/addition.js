'use strict';

/**
 * addition router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::addition.addition');
