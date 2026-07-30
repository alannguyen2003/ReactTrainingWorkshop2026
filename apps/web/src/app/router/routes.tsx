import { ReactNode } from "react";
import { HomePage } from "../../features/home/HomePage";
import { NotFoundPage } from "../../pages/NotFoundPage";

export type AppRoute = {
    path: string;
    label: string;
    title: string;
    element: ReactNode;
}

export const publicRoutes = {
    home: {
        path: "/",
        label: "home",
        title: "Home",
        element: <HomePage/>
    },
    notFound: {
        path: "*",
        label: "not-found",
        title: "Not found",
        element: <NotFoundPage/>
    }
} satisfies Record<string, AppRoute>;