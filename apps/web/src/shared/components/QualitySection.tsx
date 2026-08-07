export function QualitySection() {
    return (
        <section className="bg-beige py-14">
            <div
                className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 md:grid-cols-3"
            >
                <article className="bg-white p-8">
                    <h3 className="mb-3 text-2xl font-semibold">Premium Material</h3>
                    <p className="text-muted">
                        Durable surfaces and textiles made for daily use.
                    </p>
                </article>
                <article className="bg-white p-8">
                    <h3 className="mb-3 text-2xl font-semibold">Room Collections</h3>
                    <p className="text-muted">
                        Coordinated pieces for fast and confident styling.
                    </p>
                </article>
                <article className="bg-white p-8">
                    <h3 className="mb-3 text-2xl font-semibold">Reliable Support</h3>
                    <p className="text-muted">
                        Delivery, warranty, and care help when you need it.
                    </p>
                </article>
            </div>
        </section>
    );
}