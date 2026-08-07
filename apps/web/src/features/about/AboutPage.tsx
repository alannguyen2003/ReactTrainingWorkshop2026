import { BenefitSection } from "../../shared/components/BenefitSection";
import { Breadcrumb } from "../../shared/components/Breadcrumb";
import { QualitySection } from "../../shared/components/QualitySection";
import { AboutSection } from "./components/AboutSection";

export function AboutPage() {
    return (
        <>
            <Breadcrumb title="About" />
            <AboutSection/>
            <QualitySection/>
            <BenefitSection/>
        </>
    );
}