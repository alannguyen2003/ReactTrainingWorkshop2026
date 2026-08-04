export type BreadcrumbProps = {
    items: BreadcrumbItemType[];
};

export type BreadcrumbItemType = {
    label: string;
    href?: string
};

export function BreadCrumb({
    items
}: Readonly<BreadcrumbProps>) {
    return (
        <section className="bg-beige py-8">
            <div
                className="mx-auto flex w-[min(1240px,calc(100%-32px))] flex-wrap items-center gap-6 text-muted">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="hover:text-brand transition-colors"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-black font-medium">
                                    {item.label}
                                </span>
                            )}

                            {!isLast && (
                                <span className="text-muted">&gt;</span>
                            )}

                            {!isLast && index === items.length - 2 && (
                                <span className="h-9 w-px bg-muted" />
                            )}
                        </>
                    );
                })}
            </div>
        </section>
    );
}