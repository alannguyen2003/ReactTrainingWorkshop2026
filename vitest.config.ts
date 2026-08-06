import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        projects: ["./packages/ui", "./apps/web"],

        coverage: {
            provider: "v8",
            reporter: ["text", "html", "lcov"],
            reportsDirectory: "./coverage",
        },

        reporters: ["default", "junit"],

        outputFile: {
            junit: "./test-results/junit.xml",
        },
    },
});
