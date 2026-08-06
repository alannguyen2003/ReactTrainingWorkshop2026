import { Button } from "@react-workshop/ui/button";
import { RelatedProduct } from "../../../shared/types/product.types";
import { ProductCard } from "../../../shared/components/ProductCard";
import { ProductCardVariant } from "@react-workshop/ui/card";

export type ProductRelatedSectionProps = {
    relatedProducts: RelatedProduct[];
}

export function ProductRelatedSection({
    relatedProducts
}: Readonly<ProductRelatedSectionProps>) {
    return (
        <section className="py-14">
            <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
                <h2 className="mb-7 text-center text-4xl font-medium">
                    Related Products
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {relatedProducts.map((item) => (
                        <ProductCard key={item.id} name={item.name}
                            shortDescription={item.name}
                            price={132}
                            originalPrice={132}
                            thumbnail={item.thumbnail}
                            badge={item.badge as ProductCardVariant} 
                            href={"/"}/>
                    ))}

                </div>
                <div className="mt-11 text-center">
                    <Button
                        variant="secondary"
                        size="md"
                        className="w-[300px]">Show more</Button>
                </div>
            </div>
        </section>
    );
}