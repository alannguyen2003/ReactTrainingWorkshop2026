export function AppNavigationBar() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex min-h-[100px] w-[min(1240px,calc(100%-32px))] items-center justify-between gap-6">
                <a className="flex shrink-0 items-center gap-2 text-[34px] font-bold leading-none" href="index.html">
                    <img className="h-9 w-9 object-contain" src="images/common/common-01.png" alt="" />Furniro
                </a>
                <div className="hidden items-center gap-[72px] text-base font-medium lg:flex">
                    <a className="text-brand hover:text-brand" href="index.html">Home</a><a className="hover:text-brand"
                        href="shop.html">Shop</a><a className="hover:text-brand" href="about.html">About</a><a className="hover:text-brand"
                            href="contact.html">Contact</a>
                </div>
                <div className="flex items-center gap-3 text-black sm:gap-6">
                    <button className="grid h-10 w-10 place-items-center hover:text-brand" type="button" aria-label="Account">
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.15" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#000000"/>
                            <path d="M20 7V10.5M20 13V13.01M8 15H16C18.2091 15 20 16.7909 20 19V21H4V19C4 16.7909 5.79086 15 8 15ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="grid h-10 w-10 place-items-center hover:text-brand" type="button" aria-label="Search">
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                    </button>
                    <button className="grid h-10 w-10 place-items-center hover:text-brand" type="button" aria-label="Wishlist">
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path
                                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                        </svg>
                    </button>
                    <a className="grid h-10 w-10 place-items-center hover:text-brand" href="cart.html" aria-label="Cart"><svg
                        className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 8h15l-2 9H8L6 8Z" />
                        <path d="M6 8 5 4H2" />
                        <circle cx="9" cy="20" r="1" />
                        <circle cx="18" cy="20" r="1" />
                    </svg></a>
                </div>
            </nav>
        </header>
    );
}