import { useState } from "react";
import { ProductDetailImagesType, ProductDetailMainImageType, ProductDetailThumbnailImagesType } from "./product-image.types";
    
export function ProductDetailImage({
    mainImage,
    thumbnailImages
}: Readonly<ProductDetailImagesType>) {
    const [selectedImage, setSelectedImage] = useState(mainImage);
    return (
        <div className="grid gap-8 sm:grid-cols-[76px_1fr]">
            <ProductDetailThumbnailImages images={thumbnailImages}
                onImageSelect={setSelectedImage} />
            <ProductDetailMainImage image={selectedImage} />
        </div>
    );
}

export function ProductDetailThumbnailImages({
    images,
    onImageSelect
}: Readonly<ProductDetailThumbnailImagesType>) {

    return (
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-1">
            {images.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => onImageSelect(item)}
                    className="overflow-hidden rounded-[10px] focus:outline-none cursor-pointer"
                >
                    <img
                        src={item}
                        alt=""
                        className="h-20 w-20 object-cover"
                    />
                </button>
            ))}
        </div>
    );
}

export function ProductDetailMainImage({
    image
}: Readonly<ProductDetailMainImageType>) {
    return (
        <div
            className="grid min-h-[400px] items-center rounded-[10px] bg-[#f9f1e7] p-8"
        >
            <img
                className="max-h-[430px] w-full object-contain"
                src={image}
                alt={image}
            />
        </div>
    );
}