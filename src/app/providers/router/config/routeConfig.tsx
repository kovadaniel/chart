import { AppRoutes } from "shared/const/router";
import { getRouteMain } from "shared/const/router";
import MainPage from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
}