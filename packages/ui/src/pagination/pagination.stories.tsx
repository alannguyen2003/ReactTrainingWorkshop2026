import { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination, PaginationLink } from "./pagination"
import "../styles.css";
const meta: Meta<typeof Pagination> = {
    title: "Components/Pagination",
    component: Pagination,
    decorators: [
        (Story) => (
            <div className="min-h-screen bg-[#ffffff] p-10">
                <div className="flex flex-wrap items-center gap-4">
                    <Story/>
                </div>
            </div>
        ),
    ],
    args: {
        children: "1"
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <PaginationLink
                    isActive={true}
                    href="/demo">1</PaginationLink>
                <PaginationLink
                    isActive={false}
                    href="/demo">2</PaginationLink>
                <PaginationLink
                    isActive={false}
                    href="/demo">3</PaginationLink>
                <PaginationLink
                    isActive={false}
                    href="/demo">Next</PaginationLink>
            </>
        )
    }
};