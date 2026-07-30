import { AppNavigationBar } from "../../shared/components/AppNavigationBar";
import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";

export function HomePage() {
    return (
        <>
            <AppNavigationBar/>
            <main>
                <HeroSection/>
                <FeatureSection/>
            </main>
        </>
    );
}