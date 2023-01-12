/**
 * food service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::food.food', ({ strapi }): {} => ({
    async randomFood(): Promise<string> {
        const foods: string[] = ["Ice Cream", "Pizza", "Spag", "Semo", "Starch", "White Rice",];
        let selectedIndex = Math.floor(Math.random() * ((foods.length - 1) - 1 + 1)) + 1
        return foods[selectedIndex];
    },

    async get(params) {
        const data = await strapi.entityService.findOne('api::food.food', params.id, {
            fields: ['id', 'name', 'originality']
        });
        return data
    },

    async getAll() {
        const data = await strapi.entityService.findMany('api::food.food', {
            fields: ['id', 'name', 'originality']
        });
        return data
    },

    async create(body) {
        const data = await strapi.entityService.create('api::food.food', {
            data: {
                name: body.name,
                originality: body.originality
            },
        });
        return data
    },

    async update(id: number, body) {
        const data = await strapi.entityService.update('api::food.food', id, {
            data: {
                name: body.name
            }
        })
        return data
    }
}));


