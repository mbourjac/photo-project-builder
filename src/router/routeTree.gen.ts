/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as AppLayoutImport } from './../routes/_app-layout'
import { Route as AppLayoutPublicImport } from './../routes/_app-layout/_public'
import { Route as AppLayoutProtectedImport } from './../routes/_app-layout/_protected'
import { Route as AppLayoutPublicIndexImport } from './../routes/_app-layout/_public/index'
import { Route as AppLayoutPublicSignUpImport } from './../routes/_app-layout/_public/sign-up'
import { Route as AppLayoutPublicLogInImport } from './../routes/_app-layout/_public/log-in'
import { Route as AppLayoutPublicFeaturesImport } from './../routes/_app-layout/_public/features'
import { Route as AppLayoutPublicExploreImport } from './../routes/_app-layout/_public/explore'
import { Route as AppLayoutPublicAboutImport } from './../routes/_app-layout/_public/about'
import { Route as AppLayoutProtectedProjectsImport } from './../routes/_app-layout/_protected/projects'
import { Route as AppLayoutProtectedAccountImport } from './../routes/_app-layout/_protected/_account'
import { Route as AppLayoutProtectedProjectsProjectsLayoutImport } from './../routes/_app-layout/_protected/projects/_projects-layout'
import { Route as AppLayoutProtectedProjectsProjectDetailsImport } from './../routes/_app-layout/_protected/projects/_project-details'
import { Route as AppLayoutProtectedAccountSettingsImport } from './../routes/_app-layout/_protected/_account/settings'
import { Route as AppLayoutProtectedAccountProfileImport } from './../routes/_app-layout/_protected/_account/profile'
import { Route as AppLayoutProtectedProjectsProjectsLayoutIndexImport } from './../routes/_app-layout/_protected/projects/_projects-layout/index'
import { Route as AppLayoutProtectedProjectsProjectsLayoutTimelineImport } from './../routes/_app-layout/_protected/projects/_projects-layout/timeline'
import { Route as AppLayoutProtectedProjectsProjectsLayoutTagsImport } from './../routes/_app-layout/_protected/projects/_projects-layout/tags'
import { Route as AppLayoutProtectedProjectsProjectsLayoutMapImport } from './../routes/_app-layout/_protected/projects/_projects-layout/map'
import { Route as AppLayoutProtectedProjectsProjectDetailsProjectIdImport } from './../routes/_app-layout/_protected/projects/_project-details/$projectId'

// Create/Update Routes

const AppLayoutRoute = AppLayoutImport.update({
  id: '/_app-layout',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutPublicRoute = AppLayoutPublicImport.update({
  id: '/_public',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutProtectedRoute = AppLayoutProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutPublicIndexRoute = AppLayoutPublicIndexImport.update({
  path: '/',
  getParentRoute: () => AppLayoutPublicRoute,
} as any)

const AppLayoutPublicSignUpRoute = AppLayoutPublicSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => AppLayoutPublicRoute,
} as any)

const AppLayoutPublicLogInRoute = AppLayoutPublicLogInImport.update({
  path: '/log-in',
  getParentRoute: () => AppLayoutPublicRoute,
} as any)

const AppLayoutPublicFeaturesRoute = AppLayoutPublicFeaturesImport.update({
  path: '/features',
  getParentRoute: () => AppLayoutPublicRoute,
} as any)

const AppLayoutPublicExploreRoute = AppLayoutPublicExploreImport.update({
  path: '/explore',
  getParentRoute: () => AppLayoutPublicRoute,
} as any)

const AppLayoutPublicAboutRoute = AppLayoutPublicAboutImport.update({
  path: '/about',
  getParentRoute: () => AppLayoutPublicRoute,
} as any)

const AppLayoutProtectedProjectsRoute = AppLayoutProtectedProjectsImport.update(
  {
    path: '/projects',
    getParentRoute: () => AppLayoutProtectedRoute,
  } as any,
)

const AppLayoutProtectedAccountRoute = AppLayoutProtectedAccountImport.update({
  id: '/_account',
  getParentRoute: () => AppLayoutProtectedRoute,
} as any)

const AppLayoutProtectedProjectsProjectsLayoutRoute =
  AppLayoutProtectedProjectsProjectsLayoutImport.update({
    id: '/_projects-layout',
    getParentRoute: () => AppLayoutProtectedProjectsRoute,
  } as any)

const AppLayoutProtectedProjectsProjectDetailsRoute =
  AppLayoutProtectedProjectsProjectDetailsImport.update({
    id: '/_project-details',
    getParentRoute: () => AppLayoutProtectedProjectsRoute,
  } as any)

const AppLayoutProtectedAccountSettingsRoute =
  AppLayoutProtectedAccountSettingsImport.update({
    path: '/settings',
    getParentRoute: () => AppLayoutProtectedAccountRoute,
  } as any)

const AppLayoutProtectedAccountProfileRoute =
  AppLayoutProtectedAccountProfileImport.update({
    path: '/profile',
    getParentRoute: () => AppLayoutProtectedAccountRoute,
  } as any)

const AppLayoutProtectedProjectsProjectsLayoutIndexRoute =
  AppLayoutProtectedProjectsProjectsLayoutIndexImport.update({
    path: '/',
    getParentRoute: () => AppLayoutProtectedProjectsProjectsLayoutRoute,
  } as any)

const AppLayoutProtectedProjectsProjectsLayoutTimelineRoute =
  AppLayoutProtectedProjectsProjectsLayoutTimelineImport.update({
    path: '/timeline',
    getParentRoute: () => AppLayoutProtectedProjectsProjectsLayoutRoute,
  } as any)

const AppLayoutProtectedProjectsProjectsLayoutTagsRoute =
  AppLayoutProtectedProjectsProjectsLayoutTagsImport.update({
    path: '/tags',
    getParentRoute: () => AppLayoutProtectedProjectsProjectsLayoutRoute,
  } as any)

const AppLayoutProtectedProjectsProjectsLayoutMapRoute =
  AppLayoutProtectedProjectsProjectsLayoutMapImport.update({
    path: '/map',
    getParentRoute: () => AppLayoutProtectedProjectsProjectsLayoutRoute,
  } as any)

const AppLayoutProtectedProjectsProjectDetailsProjectIdRoute =
  AppLayoutProtectedProjectsProjectDetailsProjectIdImport.update({
    path: '/$projectId',
    getParentRoute: () => AppLayoutProtectedProjectsProjectDetailsRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app-layout': {
      id: '/_app-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_app-layout/_protected': {
      id: '/_app-layout/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutProtectedImport
      parentRoute: typeof AppLayoutImport
    }
    '/_app-layout/_public': {
      id: '/_app-layout/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutPublicImport
      parentRoute: typeof AppLayoutImport
    }
    '/_app-layout/_protected/_account': {
      id: '/_app-layout/_protected/_account'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutProtectedAccountImport
      parentRoute: typeof AppLayoutProtectedImport
    }
    '/_app-layout/_protected/projects': {
      id: '/_app-layout/_protected/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof AppLayoutProtectedProjectsImport
      parentRoute: typeof AppLayoutProtectedImport
    }
    '/_app-layout/_public/about': {
      id: '/_app-layout/_public/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AppLayoutPublicAboutImport
      parentRoute: typeof AppLayoutPublicImport
    }
    '/_app-layout/_public/explore': {
      id: '/_app-layout/_public/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof AppLayoutPublicExploreImport
      parentRoute: typeof AppLayoutPublicImport
    }
    '/_app-layout/_public/features': {
      id: '/_app-layout/_public/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof AppLayoutPublicFeaturesImport
      parentRoute: typeof AppLayoutPublicImport
    }
    '/_app-layout/_public/log-in': {
      id: '/_app-layout/_public/log-in'
      path: '/log-in'
      fullPath: '/log-in'
      preLoaderRoute: typeof AppLayoutPublicLogInImport
      parentRoute: typeof AppLayoutPublicImport
    }
    '/_app-layout/_public/sign-up': {
      id: '/_app-layout/_public/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof AppLayoutPublicSignUpImport
      parentRoute: typeof AppLayoutPublicImport
    }
    '/_app-layout/_public/': {
      id: '/_app-layout/_public/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppLayoutPublicIndexImport
      parentRoute: typeof AppLayoutPublicImport
    }
    '/_app-layout/_protected/_account/profile': {
      id: '/_app-layout/_protected/_account/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AppLayoutProtectedAccountProfileImport
      parentRoute: typeof AppLayoutProtectedAccountImport
    }
    '/_app-layout/_protected/_account/settings': {
      id: '/_app-layout/_protected/_account/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AppLayoutProtectedAccountSettingsImport
      parentRoute: typeof AppLayoutProtectedAccountImport
    }
    '/_app-layout/_protected/projects/_project-details': {
      id: '/_app-layout/_protected/projects/_project-details'
      path: ''
      fullPath: '/projects'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectDetailsImport
      parentRoute: typeof AppLayoutProtectedProjectsImport
    }
    '/_app-layout/_protected/projects/_projects-layout': {
      id: '/_app-layout/_protected/projects/_projects-layout'
      path: ''
      fullPath: '/projects'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectsLayoutImport
      parentRoute: typeof AppLayoutProtectedProjectsImport
    }
    '/_app-layout/_protected/projects/_project-details/$projectId': {
      id: '/_app-layout/_protected/projects/_project-details/$projectId'
      path: '/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectDetailsProjectIdImport
      parentRoute: typeof AppLayoutProtectedProjectsProjectDetailsImport
    }
    '/_app-layout/_protected/projects/_projects-layout/map': {
      id: '/_app-layout/_protected/projects/_projects-layout/map'
      path: '/map'
      fullPath: '/projects/map'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectsLayoutMapImport
      parentRoute: typeof AppLayoutProtectedProjectsProjectsLayoutImport
    }
    '/_app-layout/_protected/projects/_projects-layout/tags': {
      id: '/_app-layout/_protected/projects/_projects-layout/tags'
      path: '/tags'
      fullPath: '/projects/tags'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectsLayoutTagsImport
      parentRoute: typeof AppLayoutProtectedProjectsProjectsLayoutImport
    }
    '/_app-layout/_protected/projects/_projects-layout/timeline': {
      id: '/_app-layout/_protected/projects/_projects-layout/timeline'
      path: '/timeline'
      fullPath: '/projects/timeline'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectsLayoutTimelineImport
      parentRoute: typeof AppLayoutProtectedProjectsProjectsLayoutImport
    }
    '/_app-layout/_protected/projects/_projects-layout/': {
      id: '/_app-layout/_protected/projects/_projects-layout/'
      path: '/'
      fullPath: '/projects/'
      preLoaderRoute: typeof AppLayoutProtectedProjectsProjectsLayoutIndexImport
      parentRoute: typeof AppLayoutProtectedProjectsProjectsLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AppLayoutRoute: AppLayoutRoute.addChildren({
    AppLayoutProtectedRoute: AppLayoutProtectedRoute.addChildren({
      AppLayoutProtectedAccountRoute:
        AppLayoutProtectedAccountRoute.addChildren({
          AppLayoutProtectedAccountProfileRoute,
          AppLayoutProtectedAccountSettingsRoute,
        }),
      AppLayoutProtectedProjectsRoute:
        AppLayoutProtectedProjectsRoute.addChildren({
          AppLayoutProtectedProjectsProjectDetailsRoute:
            AppLayoutProtectedProjectsProjectDetailsRoute.addChildren({
              AppLayoutProtectedProjectsProjectDetailsProjectIdRoute,
            }),
          AppLayoutProtectedProjectsProjectsLayoutRoute:
            AppLayoutProtectedProjectsProjectsLayoutRoute.addChildren({
              AppLayoutProtectedProjectsProjectsLayoutMapRoute,
              AppLayoutProtectedProjectsProjectsLayoutTagsRoute,
              AppLayoutProtectedProjectsProjectsLayoutTimelineRoute,
              AppLayoutProtectedProjectsProjectsLayoutIndexRoute,
            }),
        }),
    }),
    AppLayoutPublicRoute: AppLayoutPublicRoute.addChildren({
      AppLayoutPublicAboutRoute,
      AppLayoutPublicExploreRoute,
      AppLayoutPublicFeaturesRoute,
      AppLayoutPublicLogInRoute,
      AppLayoutPublicSignUpRoute,
      AppLayoutPublicIndexRoute,
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app-layout"
      ]
    },
    "/_app-layout": {
      "filePath": "_app-layout.tsx",
      "children": [
        "/_app-layout/_protected",
        "/_app-layout/_public"
      ]
    },
    "/_app-layout/_protected": {
      "filePath": "_app-layout/_protected.tsx",
      "parent": "/_app-layout",
      "children": [
        "/_app-layout/_protected/_account",
        "/_app-layout/_protected/projects"
      ]
    },
    "/_app-layout/_public": {
      "filePath": "_app-layout/_public.tsx",
      "parent": "/_app-layout",
      "children": [
        "/_app-layout/_public/about",
        "/_app-layout/_public/explore",
        "/_app-layout/_public/features",
        "/_app-layout/_public/log-in",
        "/_app-layout/_public/sign-up",
        "/_app-layout/_public/"
      ]
    },
    "/_app-layout/_protected/_account": {
      "filePath": "_app-layout/_protected/_account.tsx",
      "parent": "/_app-layout/_protected",
      "children": [
        "/_app-layout/_protected/_account/profile",
        "/_app-layout/_protected/_account/settings"
      ]
    },
    "/_app-layout/_protected/projects": {
      "filePath": "_app-layout/_protected/projects.tsx",
      "parent": "/_app-layout/_protected",
      "children": [
        "/_app-layout/_protected/projects/_project-details",
        "/_app-layout/_protected/projects/_projects-layout"
      ]
    },
    "/_app-layout/_public/about": {
      "filePath": "_app-layout/_public/about.tsx",
      "parent": "/_app-layout/_public"
    },
    "/_app-layout/_public/explore": {
      "filePath": "_app-layout/_public/explore.tsx",
      "parent": "/_app-layout/_public"
    },
    "/_app-layout/_public/features": {
      "filePath": "_app-layout/_public/features.tsx",
      "parent": "/_app-layout/_public"
    },
    "/_app-layout/_public/log-in": {
      "filePath": "_app-layout/_public/log-in.tsx",
      "parent": "/_app-layout/_public"
    },
    "/_app-layout/_public/sign-up": {
      "filePath": "_app-layout/_public/sign-up.tsx",
      "parent": "/_app-layout/_public"
    },
    "/_app-layout/_public/": {
      "filePath": "_app-layout/_public/index.tsx",
      "parent": "/_app-layout/_public"
    },
    "/_app-layout/_protected/_account/profile": {
      "filePath": "_app-layout/_protected/_account/profile.tsx",
      "parent": "/_app-layout/_protected/_account"
    },
    "/_app-layout/_protected/_account/settings": {
      "filePath": "_app-layout/_protected/_account/settings.tsx",
      "parent": "/_app-layout/_protected/_account"
    },
    "/_app-layout/_protected/projects/_project-details": {
      "filePath": "_app-layout/_protected/projects/_project-details.tsx",
      "parent": "/_app-layout/_protected/projects",
      "children": [
        "/_app-layout/_protected/projects/_project-details/$projectId"
      ]
    },
    "/_app-layout/_protected/projects/_projects-layout": {
      "filePath": "_app-layout/_protected/projects/_projects-layout.tsx",
      "parent": "/_app-layout/_protected/projects",
      "children": [
        "/_app-layout/_protected/projects/_projects-layout/map",
        "/_app-layout/_protected/projects/_projects-layout/tags",
        "/_app-layout/_protected/projects/_projects-layout/timeline",
        "/_app-layout/_protected/projects/_projects-layout/"
      ]
    },
    "/_app-layout/_protected/projects/_project-details/$projectId": {
      "filePath": "_app-layout/_protected/projects/_project-details/$projectId.tsx",
      "parent": "/_app-layout/_protected/projects/_project-details"
    },
    "/_app-layout/_protected/projects/_projects-layout/map": {
      "filePath": "_app-layout/_protected/projects/_projects-layout/map.tsx",
      "parent": "/_app-layout/_protected/projects/_projects-layout"
    },
    "/_app-layout/_protected/projects/_projects-layout/tags": {
      "filePath": "_app-layout/_protected/projects/_projects-layout/tags.tsx",
      "parent": "/_app-layout/_protected/projects/_projects-layout"
    },
    "/_app-layout/_protected/projects/_projects-layout/timeline": {
      "filePath": "_app-layout/_protected/projects/_projects-layout/timeline.tsx",
      "parent": "/_app-layout/_protected/projects/_projects-layout"
    },
    "/_app-layout/_protected/projects/_projects-layout/": {
      "filePath": "_app-layout/_protected/projects/_projects-layout/index.tsx",
      "parent": "/_app-layout/_protected/projects/_projects-layout"
    }
  }
}
ROUTE_MANIFEST_END */
