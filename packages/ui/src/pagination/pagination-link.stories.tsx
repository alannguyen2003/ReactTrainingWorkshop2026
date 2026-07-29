import { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationLink } from "./pagination";

const meta: Meta<typeof PaginationLink> = {
    title: "Components/PaginationLink",
    component: PaginationLink,
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-[#fcfbf7] p-10">
                <div className="flex flex-wrap items-center gap-4">
                    <Story/>
                </div>
            </div>
        )
    ],
    args: {
        children: "1",
        href: "/demo"
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};