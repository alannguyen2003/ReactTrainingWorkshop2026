import { Button } from "@react-workshop/ui/button";

export function ProductRelatedSection() {
    return (
        <section className="py-14">
            <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
                <h2 className="mb-7 text-center text-4xl font-medium">
                    Related Products
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="group relative overflow-hidden bg-product">
                        <a href="product-detail.html"
                        ><img
                                className="h-[301px] w-full object-cover"
                                src="/images/product/product-01.png"
                                alt="Syltherine" /></a
                        ><span
                            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-danger text-base font-medium text-white"
                        >-30%</span
                        >
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-dark">Syltherine</h3>
                            <p className="mt-2 font-medium text-[#898989]">
                                Stylish cafe chair
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-4">
                                <strong className="text-xl font-semibold text-dark"
                                >Rp 2.500.000</strong
                                ><span className="text-base text-[#b0b0b0] line-through"
                                >Rp 3.500.000</span
                                >
                            </div>
                        </div>
                        <div
                            className="absolute inset-0 hidden place-items-center bg-[#3a3a3a]/70 group-hover:grid"
                        >
                            <div className="grid justify-items-center gap-6">
                                <a
                                    className="bg-white px-14 py-3 font-semibold text-brand"
                                    href="cart.html"
                                >Add to cart</a
                                >
                                <div className="flex gap-5 text-white">
                                    <span>Share</span><span>Compare</span><span>Like</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    
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