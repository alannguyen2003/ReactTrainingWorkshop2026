import { Card, CardBadge, CardDescription, CardFunction, CardImage, CardPrice, CardTitle } from "@react-workshop/ui/card";
import { ProductCardProps } from "../types/product-card.types";
export function ProductCard({
    name
}: Readonly<ProductCardProps>) {
    return (
        <Card>
            <CardImage href="/hehe" title="Demo"
                    content="../../public/images/product/product-01.png"
                    >
                    <CardBadge isNew={false}
                        content="-30%"/>
                </CardImage>
                
                <div className="p-4">
                    <CardTitle content={name} />
                    <CardDescription content="Demo ne" />
                    <CardPrice
                        price={10000000}
                        slashPrice={10000000}
                    />
                </div>
                <CardFunction addToCartHref="#"/>
        </Card>
    );
}