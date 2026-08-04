import { Meta, StoryObj } from "@storybook/react-vite";
import { ProductDetailImage } from "./product-image";

const meta: Meta<typeof ProductDetailImage> = {
    title: "Components/ProductImage",
    component: ProductDetailImage,
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-[#ffffff] p-10">
                <div className="flex flex-wrap items-center gap-4">
                    <Story />
                </div>
            </div>
        )
    ],
    args: {
        mainImage: "/images/product/product-01.png",
        thumbnailImages: [
            "/images/product/product-03.jpg",
            "/images/product/product-08.png",
            "/images/product/product-01.png",
            "/images/product/product-07.png"
        ]
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};