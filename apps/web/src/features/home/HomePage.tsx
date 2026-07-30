import { Footer } from "../../shared/components/Footer";
import { AppNavigationBar } from "../../shared/components/AppNavigationBar";
import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { BenefitSection } from "../../shared/components/BenefitSection";
import { OurProductSection } from "./components/OurProductSection";
import { ExploreSection } from "./components/ExploreSection";

export function HomePage() {
    return (
        <>
            <AppNavigationBar />
            <main>
                <HeroSection />
                <FeatureSection />
                <OurProductSection />
                <ExploreSection />
                <BenefitSection />
            </main>
            <Footer />
        </>
    );
}