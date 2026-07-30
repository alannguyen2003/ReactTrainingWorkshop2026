import { Button } from "@react-workshop/ui/button";
import { ProductCard } from "../../../shared/components/ProductCard";

export function OurProductSection() {
    const items: React.ReactNode[] = [];
    for (let index = 0; index < 8; index++) {
        items.push(
            <ProductCard name={"index " + index} />
        )
    }
    return (
        <section className="pb-16">
            <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
                <h2 className="mb-8 text-center text-[40px] font-bold text-dark">
                    Our Products
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {items}
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