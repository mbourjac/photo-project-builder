/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as LayoutImport } from './../routes/_layout'
import { Route as LayoutIndexImport } from './../routes/_layout/index'
import { Route as LayoutSignUpImport } from './../routes/_layout/sign-up'
import { Route as LayoutLogInImport } from './../routes/_layout/log-in'
import { Route as LayoutFeaturesImport } from './../routes/_layout/features'
import { Route as LayoutExploreImport } from './../routes/_layout/explore'
import { Route as LayoutAboutImport } from './../routes/_layout/about'
import { Route as LayoutProtectedImport } from './../routes/_layout/_protected'
import { Route as LayoutProtectedSettingsImport } from './../routes/_layout/_protected/settings'
import { Route as LayoutProtectedProjectsImport } from './../routes/_layout/_protected/projects'
import { Route as LayoutProtectedProfileImport } from './../routes/_layout/_protected/profile'
import { Route as LayoutProtectedProjectsLayoutImport } from './../routes/_layout/_protected/projects/_layout'
import { Route as LayoutProtectedProjectsLayoutIndexImport } from './../routes/_layout/_protected/projects/_layout/index'
import { Route as LayoutProtectedProjectsLayoutTimelineImport } from './../routes/_layout/_protected/projects/_layout/timeline'
import { Route as LayoutProtectedProjectsLayoutTagsImport } from './../routes/_layout/_protected/projects/_layout/tags'
import { Route as LayoutProtectedProjectsLayoutMapImport } from './../routes/_layout/_protected/projects/_layout/map'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSignUpRoute = LayoutSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLogInRoute = LayoutLogInImport.update({
  path: '/log-in',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFeaturesRoute = LayoutFeaturesImport.update({
  path: '/features',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutExploreRoute = LayoutExploreImport.update({
  path: '/explore',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProtectedRoute = LayoutProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProtectedSettingsRoute = LayoutProtectedSettingsImport.update({
  path: '/settings',
  getParentRoute: () => LayoutProtectedRoute,
} as any)

const LayoutProtectedProjectsRoute = LayoutProtectedProjectsImport.update({
  path: '/projects',
  getParentRoute: () => LayoutProtectedRoute,
} as any)

const LayoutProtectedProfileRoute = LayoutProtectedProfileImport.update({
  path: '/profile',
  getParentRoute: () => LayoutProtectedRoute,
} as any)

const LayoutProtectedProjectsLayoutRoute =
  LayoutProtectedProjectsLayoutImport.update({
    id: '/_layout',
    getParentRoute: () => LayoutProtectedProjectsRoute,
  } as any)

const LayoutProtectedProjectsLayoutIndexRoute =
  LayoutProtectedProjectsLayoutIndexImport.update({
    path: '/',
    getParentRoute: () => LayoutProtectedProjectsLayoutRoute,
  } as any)

const LayoutProtectedProjectsLayoutTimelineRoute =
  LayoutProtectedProjectsLayoutTimelineImport.update({
    path: '/timeline',
    getParentRoute: () => LayoutProtectedProjectsLayoutRoute,
  } as any)

const LayoutProtectedProjectsLayoutTagsRoute =
  LayoutProtectedProjectsLayoutTagsImport.update({
    path: '/tags',
    getParentRoute: () => LayoutProtectedProjectsLayoutRoute,
  } as any)

const LayoutProtectedProjectsLayoutMapRoute =
  LayoutProtectedProjectsLayoutMapImport.update({
    path: '/map',
    getParentRoute: () => LayoutProtectedProjectsLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_protected': {
      id: '/_layout/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutProtectedImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/explore': {
      id: '/_layout/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof LayoutExploreImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/features': {
      id: '/_layout/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof LayoutFeaturesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/log-in': {
      id: '/_layout/log-in'
      path: '/log-in'
      fullPath: '/log-in'
      preLoaderRoute: typeof LayoutLogInImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/sign-up': {
      id: '/_layout/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof LayoutSignUpImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/_protected/profile': {
      id: '/_layout/_protected/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof LayoutProtectedProfileImport
      parentRoute: typeof LayoutProtectedImport
    }
    '/_layout/_protected/projects': {
      id: '/_layout/_protected/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof LayoutProtectedProjectsImport
      parentRoute: typeof LayoutProtectedImport
    }
    '/_layout/_protected/settings': {
      id: '/_layout/_protected/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof LayoutProtectedSettingsImport
      parentRoute: typeof LayoutProtectedImport
    }
    '/_layout/_protected/projects/_layout': {
      id: '/_layout/_protected/projects/_layout'
      path: ''
      fullPath: '/projects'
      preLoaderRoute: typeof LayoutProtectedProjectsLayoutImport
      parentRoute: typeof LayoutProtectedProjectsImport
    }
    '/_layout/_protected/projects/_layout/map': {
      id: '/_layout/_protected/projects/_layout/map'
      path: '/map'
      fullPath: '/projects/map'
      preLoaderRoute: typeof LayoutProtectedProjectsLayoutMapImport
      parentRoute: typeof LayoutProtectedProjectsLayoutImport
    }
    '/_layout/_protected/projects/_layout/tags': {
      id: '/_layout/_protected/projects/_layout/tags'
      path: '/tags'
      fullPath: '/projects/tags'
      preLoaderRoute: typeof LayoutProtectedProjectsLayoutTagsImport
      parentRoute: typeof LayoutProtectedProjectsLayoutImport
    }
    '/_layout/_protected/projects/_layout/timeline': {
      id: '/_layout/_protected/projects/_layout/timeline'
      path: '/timeline'
      fullPath: '/projects/timeline'
      preLoaderRoute: typeof LayoutProtectedProjectsLayoutTimelineImport
      parentRoute: typeof LayoutProtectedProjectsLayoutImport
    }
    '/_layout/_protected/projects/_layout/': {
      id: '/_layout/_protected/projects/_layout/'
      path: '/'
      fullPath: '/projects/'
      preLoaderRoute: typeof LayoutProtectedProjectsLayoutIndexImport
      parentRoute: typeof LayoutProtectedProjectsLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({
    LayoutProtectedRoute: LayoutProtectedRoute.addChildren({
      LayoutProtectedProfileRoute,
      LayoutProtectedProjectsRoute: LayoutProtectedProjectsRoute.addChildren({
        LayoutProtectedProjectsLayoutRoute:
          LayoutProtectedProjectsLayoutRoute.addChildren({
            LayoutProtectedProjectsLayoutMapRoute,
            LayoutProtectedProjectsLayoutTagsRoute,
            LayoutProtectedProjectsLayoutTimelineRoute,
            LayoutProtectedProjectsLayoutIndexRoute,
          }),
      }),
      LayoutProtectedSettingsRoute,
    }),
    LayoutAboutRoute,
    LayoutExploreRoute,
    LayoutFeaturesRoute,
    LayoutLogInRoute,
    LayoutSignUpRoute,
    LayoutIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_protected",
        "/_layout/about",
        "/_layout/explore",
        "/_layout/features",
        "/_layout/log-in",
        "/_layout/sign-up",
        "/_layout/"
      ]
    },
    "/_layout/_protected": {
      "filePath": "_layout/_protected.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_protected/profile",
        "/_layout/_protected/projects",
        "/_layout/_protected/settings"
      ]
    },
    "/_layout/about": {
      "filePath": "_layout/about.tsx",
      "parent": "/_layout"
    },
    "/_layout/explore": {
      "filePath": "_layout/explore.tsx",
      "parent": "/_layout"
    },
    "/_layout/features": {
      "filePath": "_layout/features.tsx",
      "parent": "/_layout"
    },
    "/_layout/log-in": {
      "filePath": "_layout/log-in.tsx",
      "parent": "/_layout"
    },
    "/_layout/sign-up": {
      "filePath": "_layout/sign-up.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/_protected/profile": {
      "filePath": "_layout/_protected/profile.tsx",
      "parent": "/_layout/_protected"
    },
    "/_layout/_protected/projects": {
      "filePath": "_layout/_protected/projects.tsx",
      "parent": "/_layout/_protected",
      "children": [
        "/_layout/_protected/projects/_layout"
      ]
    },
    "/_layout/_protected/settings": {
      "filePath": "_layout/_protected/settings.tsx",
      "parent": "/_layout/_protected"
    },
    "/_layout/_protected/projects/_layout": {
      "filePath": "_layout/_protected/projects/_layout.tsx",
      "parent": "/_layout/_protected/projects",
      "children": [
        "/_layout/_protected/projects/_layout/map",
        "/_layout/_protected/projects/_layout/tags",
        "/_layout/_protected/projects/_layout/timeline",
        "/_layout/_protected/projects/_layout/"
      ]
    },
    "/_layout/_protected/projects/_layout/map": {
      "filePath": "_layout/_protected/projects/_layout/map.tsx",
      "parent": "/_layout/_protected/projects/_layout"
    },
    "/_layout/_protected/projects/_layout/tags": {
      "filePath": "_layout/_protected/projects/_layout/tags.tsx",
      "parent": "/_layout/_protected/projects/_layout"
    },
    "/_layout/_protected/projects/_layout/timeline": {
      "filePath": "_layout/_protected/projects/_layout/timeline.tsx",
      "parent": "/_layout/_protected/projects/_layout"
    },
    "/_layout/_protected/projects/_layout/": {
      "filePath": "_layout/_protected/projects/_layout/index.tsx",
      "parent": "/_layout/_protected/projects/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
