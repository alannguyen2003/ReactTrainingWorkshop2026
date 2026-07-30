import { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
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