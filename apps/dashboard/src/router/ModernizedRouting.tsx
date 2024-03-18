import React from 'react'
import App from 'App'
import {useMemo} from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'
import {RootRouteErrorBoundary} from './RootRouteErrorBoundary'
import {BASE_ROUTES, ROUTES} from './constants'
import NotFound from 'pages/NotFound'
import SideBar from 'pages/SideBar'
import Layout from 'pages/Layout'

export const ModernizedRouting = () => {
    const router = useMemo(() => {
        const routesFromElements = createRoutesFromElements(
            <Route Component={Layout} errorElement={<RootRouteErrorBoundary />}>
                <Route path={ROUTES.dashboard}>
                    <Route index element={<Dashboard />} />
                    <Route path={BASE_ROUTES.profile} element={<Profile />} />
                    <Route path="*" Component={NotFound} />
                </Route>
            </Route>
        )

        return createBrowserRouter(routesFromElements)
    }, [])

    return (<RouterProvider router={router} />)
}