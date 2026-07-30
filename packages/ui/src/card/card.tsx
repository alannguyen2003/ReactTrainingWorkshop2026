import { cn, numberToViFormat } from "../utils";
/**
 * 
 * <article class="group relative overflow-hidden bg-product">
            <a href="product-detail.html"><img class="h-[301px] w-full object-cover" src="images/product/product-03.jpg"
                alt="Lolito" /></a><span
              class="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-danger text-base font-medium text-white">-50%</span>
            <div class="p-4">
              <h3 class="text-sm font-semibold text-dark">Lolito</h3>
              <p class="text-sm mt-2 font-medium text-[#898989]">Luxury big sofa</p>
              <div class="mt-2 flex flex-wrap items-center gap-4">
                <strong class="text-xs font-semibold text-dark">Rp 7.000.000</strong><span
                  class="text-xs text-[#b0b0b0] line-through">Rp 14.000.000</span>
              </div>
            </div>
            <div class="absolute inset-0 hidden place-items-center bg-[#3a3a3a]/70 group-hover:grid">
              <div class="grid justify-items-center gap-6">
                <a class="bg-white px-14 py-3 font-semibold text-brand" href="cart.html">Add to cart</a>
                <div class="flex gap-5 text-white">
                  <span>Share</span><span>Compare</span><span>Like</span>
                </div>
              </div>
            </div>
          </article>
 */

export function Card({ className, children, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("group relative overflow-hidden bg-gray-200", className)}
      {...props}
    >
      {children}
    </article>
  );
}

export function CardImage({className, title, content, children, ...props}: React.ComponentProps<"a">) {
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
  isNew: boolean;
}

export function CardBadge({
  className,
  content,
  isNew,
  ...props
}: Readonly<CardBadgeProps>) {
  return (
    <span
      className={cn("absolute right-6 top-6 grid h-12 w-12 place-items-center", 
                    "rounded-full text-base font-medium text-white",
                  !isNew ? "bg-red-400" : "bg-emerald-400",
                  className)}
      {...props}>
      {isNew ? "New" : content}
    </span>
  );
}

export function CardTitle({className, content, ...props} : React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-2xl font-semibold text-dark", className)}
      {...props}>
      {content}
    </h3>
  );
}

export function CardDescription({className, content, ...props}: React.ComponentProps<"p">) {
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
      <strong className="text-l font-semibold text-dark">{"Rp " + numberToViFormat(price)}</strong>
      {slashPrice !== 0 && 
        <span
          className="text-sm text-[#b0b0b0] line-through">
            {slashPrice ? "Rp " + numberToViFormat(slashPrice) : "" }
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
  addToCartHref,
  ...props
}: Readonly<CardFunctionProps>) {
  return (
    <div 
      className={cn("absolute inset-0 hidden place-items-center bg-[#3a3a3a]/70 group-hover:grid", className)}
      {...props}>
      <div className="grid justify-items-center gap-6">
        <a className="bg-white px-14 py-3 font-semibold text-brand" href="/">Add to cart</a>
        <div className="flex gap-5 text-white">
          <span>Share</span><span>Compare</span><span>Like</span>
        </div>
      </div>
    </div>
  )
}
