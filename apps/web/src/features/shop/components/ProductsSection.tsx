import { Product } from "src/shared/types/product.types";
import { ProductCard } from "../../../shared/components/ProductCard";
import { ProductCardVariant } from "@react-workshop/ui/card";

type ProductsSectionProps = {
    products: Product[];
}
export function ProductsSection({
    products,
}: Readonly<ProductsSectionProps>) {
    return (
        <section className="py-16">
            <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((item) => (
                        <ProductCard key={item.id} name={item.name}
                            shortDescription={item.shortDescription}
                            price={item.price}
                            originalPrice={item.originalPrice}
                            thumbnail={item.thumbnail}
                            badge={item.badge as ProductCardVariant} />
                    ))}
                </div>
            </div>
        </section>
    );
}