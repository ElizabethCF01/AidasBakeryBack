'use strict';

/**
 * addition controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::addition.addition');
