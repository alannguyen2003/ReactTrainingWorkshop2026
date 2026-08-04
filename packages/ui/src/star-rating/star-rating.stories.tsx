import { Meta, StoryObj } from "@storybook/react-vite";
import { StarRating } from "./star-rating";

const meta: Meta<typeof StarRating> = {
    title: "Components/StarRating",
    component: StarRating,
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
        value: 3.4
    }
};


export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};