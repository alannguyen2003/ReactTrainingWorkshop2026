import { Card, CardBadge, CardDescription, CardFunction, CardImage, CardPrice, CardTitle } from "@react-workshop/ui/card";
import { ProductCardProps } from "../types/product-card.types";

export type ProductCardBadge = 
    | "New"
    | "Sale"
    | "Popular"
    | "Trending"
    | "Featured";
export function ProductCard({
    key,
    name,
    shortDescription,
    thumbnail,
    price,
    originalPrice,
    badge
}: Readonly<ProductCardProps>) {
    return (
        <Card key={key}>
            <CardImage href="/" title="Demo"
                    content={thumbnail}
                    >
                    <CardBadge type={badge}
                        content="New"/>
                </CardImage>
                
                <div className="p-4">
                    <CardTitle content={name} />
                    <CardDescription content={shortDescription} />
                    <CardPrice
                        price={price}
                        slashPrice={originalPrice !== 0 ? originalPrice : 0}
                    />
                </div>
                <CardFunction addToCartHref="#"/>
        </Card>
    );
}