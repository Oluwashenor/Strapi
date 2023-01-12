/**
 * food controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::food.food', ({ strapi }) => ({

  async suggestFood(context) {
    try {
      let response = await strapi.service('api::food.food').randomFood()
      context.body = response;
    } catch (err) {
      context.body = err;
    }
  },

  async get(context) {
    try {
      const response = await strapi.service('api::food.food').get(context.params)
      context.body = response
    }
    catch (error) {
      context.body = error;
    }
  },

  async getAll(context) {
    try {
      const data = await strapi.service('api::food.food').getAll()
      context.body = data
    }
    catch (error) {
      context.body = error
    }
  },

  async create(context) {
    try {
      const body = context.request.body.data
      const entry = await strapi.service('api::food.food').create(body)
      context.body = entry
    }
    catch (err) {
      context.body = err
    }
  },

  async update(context) {
    try {
      const id = context.params.id
      const body = context.request.body.data
      const data = await strapi.service('api::food.food').update(id, body)
      context.body = data
    } catch (error) {
      console.log(error)
      context.body = error
    }
  }



}));



