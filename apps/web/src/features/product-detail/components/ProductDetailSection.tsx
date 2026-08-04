import { ProductDetailImage } from "@react-workshop/ui/product-image";
import { ProductDetail } from "@react-workshop/ui/product-detail";
export function ProductDetailSection() {
    const mainImage = "/images/product/product-01.png";
    const thumbnailImages = [
        "/images/product/product-03.jpg",
        "/images/product/product-08.png",
        "/images/product/product-01.png",
        "/images/product/product-07.png"
    ];
    return (
        <div
            className="mx-auto grid w-[min(1240px,calc(100%-32px))] gap-20 lg:grid-cols-[553px_1fr]">
            <ProductDetailImage mainImage={mainImage} thumbnailImages={thumbnailImages} />

            <ProductDetail/>
        </div>
    );
}