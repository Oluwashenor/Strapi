/**
 * only-four policy
 */

export default async (policyContext, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info('In only-four policy.');
  const canDoSomething = true;
  console.log(policyContext.state.user);
  console.log(policyContext.state);
  const id = await strapi.plugins["users-permissions"].services.jwt.getToken(policyContext);
  const user = await strapi.plugins["users-permissions"].services.user.fetchAuthenticatedUser(id["id"]);
  console.log(id["id"]);
  console.log(user);
  if (user['username'] === 'exercise four') {
    return true;
  }
  return false;
};
