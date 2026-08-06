import { useState } from "react";
import { StarRating } from "../star-rating/star-rating";
import { cn } from "../utils";
import { ProductDetailColorProps, ProductDetailDescriptionProps, ProductDetailMetaProps, ProductDetailPriceProps, ProductDetailProps, ProductDetailReviewProps, ProductDetailSizeProps, ProductDetailTitleProps, ProductDetailVariantProps } from "./product-detail.types";

export function ProductDetail({
    ...productDetail
}: Readonly<ProductDetailProps>) {
    return (
        <div>
            <ProductTitle title={productDetail.title} />
            <ProductPrice price={productDetail.price} />
            <ProductReview reviewValue={productDetail.reviewValue} numberOfReviews={productDetail.numberOfReviews} />
            <ProductDescription description={productDetail.description} />
            <ProductVariant colors={productDetail.colors} sizes={productDetail.sizes} />
            <ProductFunction />
            <ProductMeta sku={productDetail.sku} category={productDetail.category} tags={productDetail.tags} />
        </div>
    );
}

export function ProductTitle({
    title
}: Readonly<ProductDetailTitleProps>) {
    return (
        <h1 className="text-[42px] font-normal">{title}</h1>
    );
}

export function ProductPrice({
    price
}: Readonly<ProductDetailPriceProps>) {
    return (
        <p className="mt-2 text-2xl font-medium text-muted">Rs. {price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}</p>
    );
}

export function ProductReview({
    reviewValue,
    numberOfReviews
}: Readonly<ProductDetailReviewProps>) {
    return (
        <div className="mt-4 flex items-center gap-5">
            <span className="text-xl text-[#ffc700]">
                <StarRating value={reviewValue} />
            </span>
            <span className="h-8 w-px bg-amber-950"></span>
            <span className="text-sm text-muted border-l">{numberOfReviews} Customer Review{numberOfReviews <= 1 ? "" : "s"}</span>
        </div>
    );
}

export function ProductDescription({
    description
}: Readonly<ProductDetailDescriptionProps>) {
    return (
        <p className="mt-5 max-w-[424px] text-sm leading-6">
            {description}
        </p>
    );
}

export function ProductVariant({
    colors,
    sizes
}: Readonly<ProductDetailVariantProps>) {
    const [colorSelected, setColorSelected] = useState<ProductDetailColorProps | undefined>(colors.find((item) => item.selected));
    const [sizeSelected, setSizeSelected] = useState<ProductDetailSizeProps | undefined>(sizes.find((item) => item.selected));
    
    const changeColor = (color: string) => {
        setColorSelected(colors.find((item) => item.value === color));
    } 

    const changeSize = (size: string) => {
        setSizeSelected(sizes.find((item) => item.label === size));
    }
    
    return (
        <>
            <div className="mt-6">
                <p className="mb-3 text-sm text-muted">Size</p>
                <div className="flex gap-4">
                    {sizes.map((item) => (
                        <button type="button" key={item.label}
                            className={cn("h-7 w-7 rounded",
                                item.label === sizeSelected?.label ? "bg-[#b88e2f] text-white" : "bg-[#f9f1e7]"
                            )}
                            onClick={() => changeSize(item.label)}
                            >{item.label}</button>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <p className="mb-3 text-sm text-muted">Color</p>
                <div className="flex gap-4">
                    {colors.map((item) => (
                        <button key={item.value} type="button" onClick={() => changeColor(item.value)}
                            className={cn(`h-7 w-7 rounded-full bg-[${item.value}]`,
                                item.value === colorSelected?.value ? "ring-2 ring-black" : ""
                            )}>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export function ProductFunction() {
    return (
        <div className="mt-8 flex flex-wrap gap-5 border-b border-line pb-10">
            <div
                className="flex h-16 items-center rounded-[10px] border border-muted">
                <button className="px-4">-</button><span className="px-5">1</span>
                <button className="px-4">+</button>
            </div>
            <a
                className="inline-flex h-16 items-center rounded-[15px] border border-black px-12 text-xl hover:bg-black hover:text-white"
                href="cart.html">Add To Cart</a>
            <a
                className="inline-flex h-16 items-center rounded-[15px] border border-black px-12 text-xl hover:bg-black hover:text-white"
                href="shop.html">+ Compare</a>
        </div>
    );
}

export function ProductMeta({
    sku,
    category,
    tags
}: Readonly<ProductDetailMetaProps>) {
    return (
        <div className="w-3/4 mt-7 grid grid-cols-3 gap-2 text-[#898989]">
            <p>SKU       </p>
            <p className="col-span-2">: {sku}</p>
            <p>Category  </p>
            <p className="col-span-2">: {category}</p>
            <p>Tags      </p>
            <p className="col-span-2">: {tags.join(", ")}</p>
            <p>Share     </p>
            <div className="flex gap-4 col-span-2 items-center">:<svg fill="#000000" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
                <svg fill="#000000" className="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512" xmlSpace="preserve">
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"/>
                </svg>
                <svg fill="#000000" className="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512" xmlSpace="preserve">
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
                </svg></div>
        </div>
    );
}