import { Button } from "@react-workshop/ui/button";
import { ProductCard } from "../../../shared/components/ProductCard";
import { Product } from "../../../shared/types/product.types";
import { ProductCardVariant } from "@react-workshop/ui/card";

export type OurProductsType = {
    products: Product[];
}

export function OurProductSection({
    products
}: Readonly<OurProductsType>) {
    return (
        <section className="pb-16">
            <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
                <h2 className="mb-8 text-center text-[40px] font-bold text-dark">
                    Our Products
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((item) => (
                        <ProductCard 
                            id={item.id}
                            key={item.id} name={item.name}
                            shortDescription={item.shortDescription}
                            price={item.price}
                            originalPrice={item.originalPrice}
                            thumbnail={item.thumbnail}
                            badge={item.badge as ProductCardVariant}
                            href="/" />
                    ))}
                </div>
            </div>
            <div className="mt-8 text-center">
                <Button
                    variant="secondary"
                    size="md"
                    className="w-[300px]">Show more</Button>
            </div>

        </section>
    );
}