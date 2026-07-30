import type { HTMLAttributes } from "react";
import { cn } from "../utils";

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

export function Card({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn("group relative overflow-hidden bg-product", className)}
      {...props}
    />
  );
}

export function CardImage({className, ...props}: React.ComponentProps<"a">) {
  return (
    <a href="product-detail.html" {...props}>
      <img className={cn("h-[301px] w-full object-cover", className)} src="images/product/product-01.png"
                alt="Syltherine" />
      
    </a>
  );
}

export function CardBadge({className, ...props}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("absolute right-6 top-6 grid h-12 w-12 place-items-center", 
                    "rounded-full bg-danger text-base font-medium text-white",
                  className)}
      {...props}>
      -30%
    </span>
  );
}

export function CardTitle({className, content} : React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-sm font-semibold text-dark", className)}>
      {content}
    </h3>
  );
}

export function CardDescription({className, content}: React.ComponentProps<"p">) {
  return (<></>);
}
