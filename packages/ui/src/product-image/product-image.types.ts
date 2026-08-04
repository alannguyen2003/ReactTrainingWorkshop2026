export type ProductDetailThumbnailImagesType = {
    images: string[];
    onImageSelect: (image: string) => void;
};

export type ProductDetailMainImageType = {
    image: string;
}

export type ProductDetailImagesType = {
    mainImage: string;
    thumbnailImages: string[];
}