import { cn, numberToViFormat } from "../utils";
import { cva } from "class-variance-authority";

export function Card({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("group relative overflow-hidden bg-[#e4e4e4]", className)}
      {...props}
    >
      {children}
    </article>
  );
}

export function CardImage({ className, title, content, children, ...props }: React.ComponentProps<"a">) {
  return (
    <a {...props}>
      <img className={cn("h-[251px] w-full object-cover", className)} src={content}
        alt={title} />
      {children}
    </a>
  );
}

type CardBadgeProps = {
  className?: string;
  content?: string;
  type: ProductCardVariant;
}

export type ProductCardVariant =
  | "New"
  | "Sale"
  | "Popular"
  | "Trending"
  | "Featured";

const badgeVariants = cva("", {
  variants: {
    type: {
      New: "bg-emerald-400 text-white",
      Sale: "bg-red-400 text-white",
      Popular: "bg-orange-400 text-white",
      Trending: "bg-purple-400 text-white",
      Featured: "bg-yellow-400 text-white"
    }
  },
  defaultVariants: {
    type: "New"
  }
});

const badgeIcon = {
  New: (
    <svg fill="#ffffff" className="text-white w-6 h-6" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
      <path d="M208.8584,144a15.85626,15.85626,0,0,1-10.46778,15.01367l-52.16015,19.2168-19.2168,52.16015a16.00075,16.00075,0,0,1-30.02734,0l-19.2168-52.16015-52.16015-19.2168a16.00075,16.00075,0,0,1,0-30.02734l52.16015-19.2168,19.2168-52.16015a16.00075,16.00075,0,0,1,30.02734,0l19.2168,52.16015,52.16015,19.2168A15.85626,15.85626,0,0,1,208.8584,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
    </svg>
  ),
  Sale: (
    <svg fill="#ffffff" className="text-white w-6 h-6" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>percent</title>
      <path d="M2.25 27.188l16.688-25.594h2.406l-16.75 25.594h-2.344zM5.75 2.063c2.969 0 5.406 2.438 5.406 5.406 0 3-2.438 5.438-5.406 5.438-3 0-5.438-2.438-5.438-5.438 0-2.969 2.438-5.406 5.438-5.406zM5.75 10.969c1.906 0 3.469-1.594 3.469-3.5s-1.563-3.438-3.469-3.438-3.469 1.531-3.469 3.438 1.563 3.5 3.469 3.5zM18.313 15.406c3 0 5.438 2.438 5.438 5.438 0 2.969-2.438 5.438-5.438 5.438-2.969 0-5.406-2.469-5.406-5.438 0-3 2.438-5.438 5.406-5.438zM18.313 24.313c1.906 0 3.469-1.563 3.469-3.469s-1.563-3.469-3.469-3.469-3.469 1.563-3.469 3.469 1.563 3.469 3.469 3.469z"></path>
    </svg>
  ),
  Popular: (
    <svg className="text-white w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5455 9.92543C15.9195 9.26103 16.2313 8.66151 16.4236 8.20521C17.3573 5.98947 16.434 3.44077 14.1769 2.40112C11.9199 1.36148 9.65341 2.4395 8.65871 4.52093C6.75657 3.2157 4.21918 3.40739 2.81989 5.44424C1.42059 7.48108 1.85975 10.142 3.77629 11.594C4.6461 12.253 6.36636 13.2242 7.98596 14.0884M16.2972 11.7499C15.8751 9.482 13.9454 7.82334 11.5156 8.27415C9.08592 8.72497 7.51488 10.9171 7.84335 13.299C8.10725 15.2127 9.56392 19.7027 10.1264 21.394C10.2032 21.6248 10.2415 21.7402 10.3175 21.8206C10.3837 21.8907 10.4717 21.9416 10.5655 21.9638C10.6732 21.9894 10.7923 21.9649 11.0306 21.916C12.7765 21.5575 17.3933 20.574 19.1826 19.8457C21.4096 18.9392 22.5589 16.4841 21.6981 14.153C20.8372 11.8219 18.4723 10.9815 16.2972 11.7499Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Trending: (
    <svg className="text-white w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.5 7.5L13 15l-4-4-6 6M16 7h4.95v5" />
    </svg>
  ),
  Featured: (
    <svg className="text-white w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
} as const;

export function CardBadge({
  className,
  type = "New",
  ...props
}: Readonly<CardBadgeProps>) {
  return (
    <span
      className={cn("absolute right-6 top-6 grid h-12 w-12 place-items-center",
        "rounded-full text-base font-medium text-white",
        className,
        badgeVariants({ type }))}
      {...props}>
      {badgeIcon[type]}
    </span>
  );
}

export function CardTitle({ className, content, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-2xl font-semibold text-dark whitespace-nowrap", className)}
      {...props}>
      {content}
    </h3>
  );
}

export function CardDescription({ className, content, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-l mt-2 font-medium text-[#898989]", className)}
      {...props}>
      {content}
    </p>
  );
}

type CardPriceProps = {
  className?: string;
  price: number;
  slashPrice?: number;
}

export function CardPrice({
  className,
  price,
  slashPrice,
  ...props
}: Readonly<CardPriceProps>) {
  return (
    <div className={cn("mt-2 flex flex-wrap items-center gap-4", className)}
      {...props}>
      <strong className="text-xl font-semibold text-dark">{"Rp " + numberToViFormat(price)}</strong>
      {slashPrice !== 0 &&
        <span
          className="text-l text-[#b0b0b0] line-through">
          {slashPrice && slashPrice !== 0 ? "Rp " + numberToViFormat(slashPrice) : ""}
        </span>
      }
    </div>
  );
}

type CardFunctionProps = {
  className?: string;
  addToCartHref: string;
}

export function CardFunction({
  className,
  ...props
}: Readonly<CardFunctionProps>) {
  return (
    <a href="/"
      className={cn("absolute inset-0 hidden place-items-center bg-[#3a3a3a]/70 group-hover:grid", className)}
      {...props}>
      <div className="grid justify-items-center gap-6">
        <a className="bg-white px-14 py-3 font-semibold text-brand" href="/">Add to cart</a>
        <div className="flex gap-5 text-white">
          <a href="/" className="inline-flex items-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#ffffff" />
            </svg>
            Share
          </a>
          <a href="/" className="inline-flex items-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow / Arrow_Left_Right">
                <path id="Vector" d="M16 13L19 16M19 16L16 19M19 16H5M8 11L5 8M5 8L8 5M5 8H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
            <span>Compare</span>
          </a>
          <a href="/" className="inline-flex items-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Like
          </a>
        </div>
      </div>
    </a>
  )
}
