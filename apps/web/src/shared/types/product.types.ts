export interface Product {
    id: string; 
    slug: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    thumbnail: string;
    badge: string;
    rating: number;
    shortDescription: string;
    tags: string[];
}

export interface ProductDetail {
    id: string;
    slug: string;
    name: string;
    breadcrumb: Breadcrumb[];
    category: string;
    price: number;
    priceText: string;
    originalPrice: number;
    rating: number;
    ratingCount: number;
    reviewLabel: string;
    shortDescription: string;
    gallery: Gallery;
    sizes: Size[];
    colors: Color[];
    actions: object;
    tabs: Tab[];
    relatedProducts: RelatedProduct[];
}

export interface RelatedProduct {
    id: string;
    slug: string;
    name: string;
    priceText: string;
    originalPriceText: string;
    thumbnail: string;
    badge: string;
}

export interface Meta {
    sku: string;
    category: string;
    tags: string[];
}

export interface Tab {
    key: string;
    label: string;
    active: boolean;
    content: string[];
}
export interface Quantity {
    default: number;
    min: number;
    max: number;
}

export interface Gallery {
    active: string;
    thumbnails: string[];
}

export interface Breadcrumb {
    label: string;
    href: string;
}

export interface Size {
    label: string;
    value: string;
    selected: boolean;
}

export interface Color {
    name: string;
    value: string;
    selected: boolean;
}

