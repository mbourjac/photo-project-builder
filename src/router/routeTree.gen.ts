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
import { Route as LayoutProtectedImport } from './../routes/_layout/_protected'
import { Route as LayoutProtectedSettingsImport } from './../routes/_layout/_protected/settings'
import { Route as LayoutProtectedProfileImport } from './../routes/_layout/_protected/profile'
import { Route as LayoutProtectedDashboardImport } from './../routes/_layout/_protected/dashboard'

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

const LayoutProtectedRoute = LayoutProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProtectedSettingsRoute = LayoutProtectedSettingsImport.update({
  path: '/settings',
  getParentRoute: () => LayoutProtectedRoute,
} as any)

const LayoutProtectedProfileRoute = LayoutProtectedProfileImport.update({
  path: '/profile',
  getParentRoute: () => LayoutProtectedRoute,
} as any)

const LayoutProtectedDashboardRoute = LayoutProtectedDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => LayoutProtectedRoute,
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
    '/_layout/_protected/dashboard': {
      id: '/_layout/_protected/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof LayoutProtectedDashboardImport
      parentRoute: typeof LayoutProtectedImport
    }
    '/_layout/_protected/profile': {
      id: '/_layout/_protected/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof LayoutProtectedProfileImport
      parentRoute: typeof LayoutProtectedImport
    }
    '/_layout/_protected/settings': {
      id: '/_layout/_protected/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof LayoutProtectedSettingsImport
      parentRoute: typeof LayoutProtectedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({
    LayoutProtectedRoute: LayoutProtectedRoute.addChildren({
      LayoutProtectedDashboardRoute,
      LayoutProtectedProfileRoute,
      LayoutProtectedSettingsRoute,
    }),
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
        "/_layout/log-in",
        "/_layout/sign-up",
        "/_layout/"
      ]
    },
    "/_layout/_protected": {
      "filePath": "_layout/_protected.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_protected/dashboard",
        "/_layout/_protected/profile",
        "/_layout/_protected/settings"
      ]
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
    "/_layout/_protected/dashboard": {
      "filePath": "_layout/_protected/dashboard.tsx",
      "parent": "/_layout/_protected"
    },
    "/_layout/_protected/profile": {
      "filePath": "_layout/_protected/profile.tsx",
      "parent": "/_layout/_protected"
    },
    "/_layout/_protected/settings": {
      "filePath": "_layout/_protected/settings.tsx",
      "parent": "/_layout/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
