export function HeroSection() {
    return (
        <section className="relative min-h-[716px] overflow-hidden bg-beige">
            <img className="absolute inset-0 h-full w-full object-cover" src="images/home/home-22.jpg" alt="Interior room" />
            <div
                className="relative mx-auto grid min-h-[716px] w-[min(1240px,calc(100%-32px))] items-center justify-items-end py-12">
                <div className="w-full max-w-[643px] rounded-[10px] bg-cream px-8 py-12 md:px-14 md:py-16">
                    <p className="mb-1 font-semibold tracking-[3px]">New Arrival</p>
                    <h1 className="mb-4 text-[40px] font-bold leading-[1.25] text-brand md:text-[52px]">
                        Discover Our New Collection
                    </h1>
                    <p className="mb-11 text-lg font-medium leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis.
                    </p>
                    <a className="inline-flex bg-brand px-[72px] py-6 font-bold uppercase text-white hover:bg-[#9d7626]"
                        href="/shop">Buy Now</a>
                </div>
            </div>
        </section>
    );
}