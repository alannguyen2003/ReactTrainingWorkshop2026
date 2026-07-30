export function FeatureSection() {
    return (
        <section className="py-14">
            <div className="mx-auto w-[min(1183px,calc(100%-32px))]">
                <div className="mb-12 text-center">
                    <h2 className="text-[32px] font-bold text-[#333]">Browse The Range</h2>
                    <p className="text-xl text-[#666]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                    <a href="/shop" className="text-center"><img className="h-[480px] w-full rounded-[10px] object-cover"
                        src="images/home/home-04.png" alt="Dining" />
                        <h3 className="mt-7 text-2xl font-semibold text-[#333]">Dining</h3>
                    </a>
                    <a href="/shop" className="text-center"><img className="h-[480px] w-full rounded-[10px] object-cover"
                        src="images/home/home-08.png" alt="Living" />
                        <h3 className="mt-7 text-2xl font-semibold text-[#333]">Living</h3>
                    </a>
                    <a href="/shop" className="text-center"><img className="h-[480px] w-full rounded-[10px] object-cover"
                        src="images/home/home-12.png" alt="Bedroom" />
                        <h3 className="mt-7 text-2xl font-semibold text-[#333]">
                            Bedroom
                        </h3>
                    </a>
                </div>
            </div>
        </section>
    );
}