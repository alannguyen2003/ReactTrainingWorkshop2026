import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./app/router/routes";
import { PublicLayout } from "./layouts/PublicLayout";

const queryClient = new QueryClient(); 

export function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout/> }>
            <Route
              path={publicRoutes.home.path} 
              element={publicRoutes.home.element}
            />
            <Route
              path={publicRoutes.shop.path} 
              element={publicRoutes.shop.element}
            />
            <Route
              path={publicRoutes.productDetail.path} 
              element={publicRoutes.productDetail.element}
            />
          </Route>

          <Route element={<PublicLayout/> }>
            <Route
              path={publicRoutes.notFound.path}
              element={publicRoutes.notFound.element}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}