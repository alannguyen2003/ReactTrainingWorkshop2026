import { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardBadge, CardDescription, CardFunction, CardImage, CardPrice, CardTitle } from "./card";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-[#ffffff] p-10">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="mx-auto w-[min(1236px,calc(100%-32px))]">
                        <div className="grid gap-8 grid-cols-4">
                            <Story/>
                        </div>
                    </div>
                </div>
            </div>
        )
    ],
    args: {
        children: (
            <>
                <CardImage href="/hehe" title="Demo"
                    content="../../public/images/product/product-01.png"
                    >
                    <CardBadge type="Sale"
                        content="-30%"/>
                </CardImage>
                
                <div className="p-4">
                    <CardTitle content="Demo"/>
                    <CardDescription content="Demo ne"/>
                    <CardPrice
                        price={10000000}
                        slashPrice={10000000}
                    />
                </div>
                <CardFunction viewHref="/"/>
                
            </>
        )
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
};