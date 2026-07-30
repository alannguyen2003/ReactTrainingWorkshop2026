export function BenefitSection() {
    return (
        <section className="bg-[#faf3ea] py-[75px]">
            <div
                className="mx-auto grid w-[min(1334px,calc(100%-32px))] gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
                <div className="flex items-center gap-3 text-[#242424]">
                    <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
                        <path
                            d="M6 5H4v2a4 4 0 0 0 4 4M18 5h2v2a4 4 0 0 1-4 4M12 13v4M9 21h6M8 17h8"
                        />
                    </svg>
                    <div>
                        <h3 className="text-[25px] font-semibold leading-tight">
                            High Quality
                        </h3>
                        <p className="text-xl font-medium text-[#898989]">
                            crafted from top materials
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-[#242424]">
                    <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 7 10 17l-5-5" />
                        <path d="M21 12a9 9 0 1 1-3-6.7" />
                    </svg>
                    <div>
                        <h3 className="text-[25px] font-semibold leading-tight">
                            Warranty Protection
                        </h3>
                        <p className="text-xl font-medium text-[#898989]">Over 2 years</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-[#242424]">
                    <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
                        <circle cx="7" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                    </svg>
                    <div>
                        <h3 className="text-[25px] font-semibold leading-tight">
                            Free Shipping
                        </h3>
                        <p className="text-xl font-medium text-[#898989]">Order over 150 $</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-[#242424]">
                    <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 12a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-2" />
                        <path d="M6 12v4H4v-4h2ZM20 12v4h-2v-4h2ZM15 19a3 3 0 0 1-6 0" />
                    </svg>
                    <div>
                        <h3 className="text-[25px] font-semibold leading-tight">
                            24 / 7 Support
                        </h3>
                        <p className="text-xl font-medium text-[#898989]">
                            Dedicated support
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}