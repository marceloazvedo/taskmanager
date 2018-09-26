const createRoute = (router) => (route) =>
    (route.middleware)
        ? router[route.method](route.path, ...route.middleware, route.action)
        : router[route.method](route.path, route.action)

const createRoutes = (router, routes) => {
    routes.map(createRoute(router))
    return router
}

module.exports = (router, routes) => createRoutes(router, routes)