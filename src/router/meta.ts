import type {RouteRecordRaw} from "vue-router";

const meta = {
  'demo': {
    layout: 'demo'
  }
}

export const metaRoutes = (routes: RouteRecordRaw[]) => {
  return routes.map((route: RouteRecordRaw) => {
    const routeMeta = meta[route.path];
    if (routeMeta) {
      route.meta = {...route.meta, ...routeMeta};
    }
    route.children = route.children?.map((child) => {
      const childMeta = meta[child.path];
      if (childMeta) {
        child.meta = {...child.meta, ...childMeta};
      }
      return child
    });

    return route
  })
}
