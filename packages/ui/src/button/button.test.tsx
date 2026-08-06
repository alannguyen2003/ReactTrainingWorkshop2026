import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
    it("renders children", () => {
        render(<Button>Click me</Button>);

        expect(
            screen.getByRole("button", { name: "Click me" })
        ).toBeInTheDocument();
    });

    it("uses button as default type", () => {
        render(<Button>Button</Button>);

        expect(screen.getByRole("button")).toHaveAttribute(
            "type",
            "button"
        );
    });

    it("accepts custom type", () => {
        render(<Button type="submit">Submit</Button>);

        expect(screen.getByRole("button")).toHaveAttribute(
            "type",
            "submit"
        );
    });

    it("calls onClick", () => {
        const onClick = vi.fn();

        render(<Button onClick={onClick}>Click</Button>);

        fireEvent.click(screen.getByRole("button"));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button disabled>Disabled</Button>);

        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("is disabled while loading", () => {
        render(<Button isLoading>Loading</Button>);

        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("shows loading spinner", () => {
        const { container } = render(
            <Button isLoading>Loading</Button>
        );

        expect(container.querySelector(".animate-spin")).toBeInTheDocument();
    });

    it("does not show loading spinner when not loading", () => {
        const { container } = render(
            <Button>Button</Button>
        );

        expect(container.querySelector(".animate-spin")).not.toBeInTheDocument();
    });

    it("does not call onClick while loading", () => {
        const onClick = vi.fn();

        render(
            <Button isLoading onClick={onClick}>
                Loading
            </Button>
        );

        fireEvent.click(screen.getByRole("button"));

        expect(onClick).not.toHaveBeenCalled();
    });

    it("applies variant class", () => {
        render(<Button variant="danger">Delete</Button>);

        expect(screen.getByRole("button")).toHaveClass("bg-red-600");
    });

    it("applies size class", () => {
        render(<Button size="lg">Large</Button>);

        expect(screen.getByRole("button")).toHaveClass("h-14");
    });

    it("merges custom className", () => {
        render(<Button className="my-custom-class">Custom</Button>);

        expect(screen.getByRole("button")).toHaveClass("my-custom-class");
    });
});