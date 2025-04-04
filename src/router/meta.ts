import type {RouteRecordRaw} from "vue-router";

function findMatchingMeta(path: string, meta: Record<string, any>) {
  const keys = Object.keys(meta);
  for (const key of keys) {
    if (path.includes(key)) {
      return meta[key];
    }
  }
  return null;
}

const meta = {
  'casino': {
    layout: 'casino',
    theme: 'dark'
  }
}

export const metaRoutes = (routes: RouteRecordRaw[]) => {
  return routes.map((route: RouteRecordRaw) => {
    const routeMeta = findMatchingMeta(route.name === undefined ? '' : route.name.toString(), meta);
    if (routeMeta) {
      route.meta = {...route.meta, ...routeMeta};
    }
    route.children = metaRoutes(route.children ?? []);

    return route
  })
}
