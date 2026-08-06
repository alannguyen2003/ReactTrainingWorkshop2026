import { useParams } from "react-router-dom";
import { ProductDetailSection } from "./components/ProductDetailSection";
import { ProductAdditionalInformationSection } from "./components/ProductAdditionalInformationSection";
import { BreadCrumb } from "./components/Breadcrumb";
import { ProductRelatedSection } from "./components/ProductRelatedSection";
import { useGetProduct } from "./hooks/useGetProduct";
export function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetProduct(id as string);
    const product = data;

    if (isLoading || product === undefined) {
        return <div>Loading...</div>;
    }

    if (typeof product === "string") {
        return (
            <div className="">Not found</div>
        )   
    }

    return (
        <main>
            <BreadCrumb items={product.breadcrumb} />
            <section className="py-9">
                <ProductDetailSection 
                    title={product.name}
                    category={product.category}
                    colors={product.colors}
                    description={product.shortDescription}
                    price={product.price}
                    sku={product.meta.sku}
                    numberOfReviews={product.ratingCount}
                    reviewValue={product.rating}
                    tags={product.meta.tags}
                    sizes={product.sizes} 
                    gallery={product.gallery} />
            </section>
            <ProductAdditionalInformationSection tabs={product.tabs} key={id} />
            <ProductRelatedSection relatedProducts={product.relatedProducts}/>
        </main>
    );
}