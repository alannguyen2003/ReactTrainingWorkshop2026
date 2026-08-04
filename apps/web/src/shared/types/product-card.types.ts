import { ProductCardVariant } from "@react-workshop/ui/card";

export type ProductCardProps = {
    key: string;
    name: string;
    thumbnail: string;
    badge: ProductCardVariant;
    price: number;
    originalPrice?: number;
    shortDescription: string;
};