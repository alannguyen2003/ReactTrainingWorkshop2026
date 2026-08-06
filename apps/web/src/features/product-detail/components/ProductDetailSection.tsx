import { ProductDetailImage } from "@react-workshop/ui/product-image";
import { ProductDetail } from "@react-workshop/ui/product-detail";
import { ProductDetailProps } from "../../../../../../packages/ui/src/product-detail/product-detail.types";
export function ProductDetailSection(productDetail: Readonly<ProductDetailProps>) {
    return (
        <div
            className="mx-auto grid w-[min(1240px,calc(100%-32px))] gap-20 lg:grid-cols-[553px_1fr]">
            <ProductDetailImage mainImage={productDetail.gallery.active} thumbnailImages={productDetail.gallery.thumbnails} />

            <ProductDetail {...productDetail}/>
        </div>
    );
}