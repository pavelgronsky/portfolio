export const getRoute = (...routes: string[]) => routes.join('/')

export const getDashboardRoute = (...routes: string[]) => getRoute('', BASE_ROUTES.dashboard, ...routes)

export const BASE_ROUTES = {
    dashboard: 'app',
    profile: 'profile',
} as const

export const ROUTES = {
    dashboard: getRoute('', BASE_ROUTES.dashboard),
    profile: getDashboardRoute(BASE_ROUTES.profile),
}