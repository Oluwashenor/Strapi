/**
 * food controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::food.food', ({ strapi }) => ({


    async suggestFood(context){
       try {
           let foods : string[] = ["Ice Cream","Pizza","Spag","Semo", "Starch", "White Rice", ];
           let selectedIndex = Math.floor(Math.random() * ((foods.length-1) - 1 + 1)) + 1 
           context.body = foods[selectedIndex];
         } catch (err) {
           context.body = err;
         }
    },
   
    async get(context){
     const id = context.params.id
       try{
         const data = await strapi.entityService.findOne('api::food.food', id, {
           fields:['id','name', 'originality']
         });
         context.body = data
         console.log(data);
       }
       catch(error){
         context.body = error;
         console.log(error);
       }
    },
   
    async getAll(context){
     const id = context.params.id
       try{
         const data = await strapi.entityService.findMany('api::food.food', {
           fields:['id','name', 'originality']
         });
         context.body = data
       }
       catch(error){
         context.body = error
       }
    },
   
    async create(context){
     try{
       let body = context.request.body.data
       const entry = await strapi.entityService.create('api::food.food', {
         data: {
           name: body.name,
           originality : body.originality
         },
       });
       context.body = entry
     }
     catch(err){
       context.body = err
       console.log(err)
     }
    },
   
    async update(context){
     try {
       const id = context.params.id
       let body = context.request.body.data
       console.log(id)
       console.log(context.params)
       const update = await strapi.entityService.update('api::food.food', id, {
         data:{
           name : body.name 
         }
       })
       context.body = "Success"
     } catch (error) {
       console.log(error)
       context.body = error
     }
    }
   
   
   
   }));
   
   
   
   