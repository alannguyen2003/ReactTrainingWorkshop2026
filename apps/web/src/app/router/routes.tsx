import { ReactNode } from "react";
import { HomePage } from "../../features/home/HomePage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ShopPage } from "../../features/shop/ShopPage";
import { ProductDetailPage } from "../../features/product-detail/ProductDetailPage";

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
    shop: {
        path: "/shop",
        label: "Shop",
        title: "Shop",
        element: <ShopPage/>
    },
    productDetail: {
        path: "/shop/:id",
        label: "product-detail",
        title: "Product Detail",
        element: <ProductDetailPage/>
    },
    notFound: {
        path: "*",
        label: "not-found",
        title: "Not found",
        element: <NotFoundPage/>
    }
} satisfies Record<string, AppRoute>;