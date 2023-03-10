/**
 * food router
 */

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/food/suggestFood',
      handler: 'food.suggestFood',
      config: {
        auth: false,
        policies: ['global::only-four'],
        middlewares: [],
      }
    },
    {
      method: 'GET',
      path: '/food/:id',
      handler: 'food.get',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    },

    {
      method: 'GET',
      path: '/food',
      handler: 'food.getAll',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    },

    {
      method: 'POST',
      path: '/food',
      handler: 'food.create',
      config: {
        auth: false
      }
    }
    ,
    {
      method: 'PUT',
      path: '/food/:id',
      handler: 'food.update',
      config: {
        auth: false
      }
    }
  ]
}
