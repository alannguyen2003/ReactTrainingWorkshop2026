export function Breadcrumb() {
    return (
        <section
            className="relative grid min-h-[316px] place-items-center overflow-hidden"
        >
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src="images/common/common-02.jpg"
                alt=""
            />
            <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]"></div>
            <div className="relative text-center">
                <img
                    className="mx-auto mb-1 h-12 w-12 object-contain"
                    src="images/common/common-01.png"
                    alt=""
                />
                <h1 className="text-5xl font-medium">Shop</h1>
                <p className="mt-3 font-medium">
                    <a href="index.html">Home</a> <span className="mx-1">&gt;</span>
                    <span className="font-light">Shop</span>
                </p>
            </div>
        </section>
    );
}