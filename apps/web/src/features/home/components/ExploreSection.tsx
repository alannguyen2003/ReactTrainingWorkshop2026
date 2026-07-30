export function ExploreSection() {
    return (
        <section className="bg-[#fcf8f3] py-11">
            <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                    <h2 className="text-[40px] font-bold leading-tight text-dark">
                        50+ Beautiful rooms inspiration
                    </h2>
                    <p className="mt-2 max-w-[370px] font-medium leading-6 text-[#616161]">
                        Our designer already made a lot of beautiful prototype of rooms
                        that inspire you.
                    </p>
                    <a className="mt-6 inline-flex bg-brand px-9 py-3 font-semibold text-white" href="shop.html">Explore More</a>
                </div>
                <div className="grid gap-6 md:grid-cols-[404px_1fr]">
                    <div className="relative">
                        <img className="h-[582px] w-full object-cover" src="images/home/home-10.png" alt="Room inspiration" />
                        <div className="absolute bottom-6 left-6 flex">
                            <div className="bg-white/80 px-8 py-8">
                                <p className="text-[#616161]">01 - Bed Room</p>
                                <h3 className="mt-2 text-[28px] font-semibold text-dark">
                                    Inner Peace
                                </h3>
                            </div>
                            <div className="grid w-15 place-items-center self-end bg-brand py-4 text-white text-xs">
                                <svg className="w-8 h-8" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <img className="hidden h-[486px] w-full object-cover md:block" src="images/home/home-11.png" alt="Room" />
                </div>
            </div>
        </section>
    );
}