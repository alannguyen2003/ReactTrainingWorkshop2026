import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { BenefitSection } from "../../shared/components/BenefitSection";
import { OurProductSection } from "./components/OurProductSection";
import { ExploreSection } from "./components/ExploreSection";
import { useGetProducts } from "../shop/hooks/useGetProducts";

export function HomePage() {
    const { data: productsResponse } = useGetProducts();
    const products = productsResponse?.items ?? [];
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <OurProductSection products={products.slice(0, 4)} />
            <ExploreSection />
            <BenefitSection />
        </>
    );
}