import { useParams } from "react-router-dom";
import { ProductDetailSection } from "./components/ProductDetailSection";
import { ProductAdditionalInformationSection } from "./components/ProductAdditionalInformationSection";
import { BreadCrumb } from "./components/Breadcrumb";
import { ProductRelatedSection } from "./components/ProductRelatedSection";
import { useGetProduct } from "./hooks/useGetProduct";
export function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { data } = useGetProduct("7a3c-e04d-4d4a-a2a6");
    const product = data;

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <BreadCrumb items={product.breadcrumb} />
            <section className="py-9">
                <ProductDetailSection />
            </section>
            <ProductAdditionalInformationSection tabs={[
                {
                    "key": "description",
                    "label": "Description",
                    "active": true,
                    "content": [
                        "Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall and unplugs the chords.",
                        "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy travel."
                    ]
                },
                {
                    "key": "additional-information",
                    "label": "Additional Information",
                    "content": [
                        "Frame: kiln-dried solid wood",
                        "Upholstery: textured premium fabric",
                        "Seat depth: lounge comfort profile"
                    ]
                },
                {
                    "key": "reviews",
                    "label": "Reviews [5]",
                    "content": [
                        "Customers highlight comfort, fabric texture, and the balanced scale for medium-sized living rooms."
                    ]
                }
            ]} key={id} />
            <ProductRelatedSection/>
        </main>
    );
}