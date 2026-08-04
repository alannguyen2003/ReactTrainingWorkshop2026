import { Meta, StoryObj } from "@storybook/react-vite";
import { ProductDetailThumbnailImages } from "./product-image";

const meta: Meta<typeof ProductDetailThumbnailImages> = {
    title: "Components/ProductDetailThumbnailImages",
    component: ProductDetailThumbnailImages,
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
        images: [
            "/images/product/product-03.jpg",
            "/images/product/product-08.png",
            "/images/product/product-01.png",
            "/images/product/product-07.png"
        ]
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductThumbnailImages: Story = {};