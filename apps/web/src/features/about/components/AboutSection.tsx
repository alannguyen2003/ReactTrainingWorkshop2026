export function AboutSection() {
    return (
        <section className="py-20">
            <div
                className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 lg:grid-cols-2"
            >
                <img
                    className="h-[520px] w-full rounded-[10px] object-cover"
                    src="images/home/home-07.jpg"
                    alt="Furniro showroom"
                />
                <div>
                    <p className="mb-3 font-semibold tracking-[3px] text-brand">
                        Furniro Studio
                    </p>
                    <h2 className="mb-6 text-[42px] font-bold leading-tight">
                        Designed around calm, useful rooms.
                    </h2>
                    <p className="mb-5 leading-8 text-muted">
                        Furniro brings together room-ready furniture, soft materials, and
                        simple silhouettes inspired by the original interior commerce
                        design.
                    </p>
                    <p className="leading-8 text-muted">
                        The collection covers living, dining, bedroom, and decorative
                        essentials with consistent quality and support.
                    </p>
                </div>
            </div>
        </section>
    );
}