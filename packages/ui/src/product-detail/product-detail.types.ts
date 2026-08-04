export type ProductDetailTitleProps = {
    title: string
}

export type ProductDetailPriceProps = {
    price: number;
}

export type ProductDetailReviewProps = {
    reviewValue: number;
    numberOfReviews: number;
}

export type ProductDetailDescriptionProps = {
    description: string;
}

export type ProductDetailSizeProps = {
    label: string;
    value: string;
    selected: boolean;
}

export type ProductDetailColorProps = {
    name: string;
    value: string;
    selected: boolean;
}

export type ProductDetailVariantProps = {
    colors: ProductDetailColorProps[];
    sizes: ProductDetailSizeProps[];
}

export type ProductDetailMetaProps = {
    sku: string;
    category: string;
    tags: string[];
}

export type ProductDetailProps = {
    title: string;
    price: number;
    reviewValue: number;
    numberOfReviews: number;
    description: string;
    colors: ProductDetailColorProps[];
    sizes: ProductDetailSizeProps[];
    sku: string;
    category: string;
    tags: string[];
}