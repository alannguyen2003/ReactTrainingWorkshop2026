import { Meta, StoryObj } from "@storybook/react-vite";
import { ProductDetail } from "./product-detail";

const meta: Meta<typeof ProductDetail> = {
    title: "Components/ProductDetail",
    component: ProductDetail,
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
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};