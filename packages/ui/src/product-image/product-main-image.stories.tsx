import { Meta, StoryObj } from "@storybook/react-vite";
import { ProductDetailMainImage } from "./product-image";

const meta: Meta<typeof ProductDetailMainImage> = {
    title: "Components/ProductDetailMainImage",
    component: ProductDetailMainImage,
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-[#ffffff] p-10">
                <div className="flex flex-wrap items-center gap-4">
                    <Story/>
                </div>
            </div>
        )
    ],
    args: {
        image: "/images/product/product-01.png"
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductThumbnailImage: Story = {};