import React from "react";

interface RatingProps {
    value: number;
    max?: number;
    size?: number;
    className?: string;
}

export function StarRating({
    value,
    max = 5,
    size = 20,
    className,
}: Readonly<RatingProps>) {
    const percentage = Math.max(0, Math.min(value / max, 1)) * 100;

    return (
        <div
            className={className}
            style={{
                position: "relative",
                display: "inline-block",
                fontSize: size,
                lineHeight: 1,
            }}
        >
            {/* Empty stars */}
            <div style={{ color: "#d1d5db" }}>
                {"★".repeat(max)}
            </div>

            {/* Filled stars */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    width: `${percentage}%`,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    color: "#fbbf24",
                }}
            >
                {"★".repeat(max)}
            </div>
        </div>
    );
}