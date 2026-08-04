import { Breadcrumb } from "../../shared/components/Breadcrumb";
import { BenefitSection } from "../../shared/components/BenefitSection";
import { FilterSection } from "./components/FilterSection";
import { ProductsSection } from "./components/ProductsSection";
import { PaginationBar } from "../../shared/components/PaginationBar";
import { useGetProducts } from "./hooks/useGetProducts";

export function ShopPage() {
    const { data: productsResponse } = useGetProducts();
    const products = productsResponse?.items ?? [];
    return (
        <>
            <Breadcrumb />
            <FilterSection />
            <ProductsSection products={products} />
            <PaginationBar currentPage={1} lastPage={1} />
            <BenefitSection />
        </>
    );
}