import { Button } from "@react-workshop/ui/button"
export function NotFoundPage() {
    return (
        <div className="flex-col items-center justify-center text-center">
            <h1 className="text-xl font-semibold text-primary">404 - Not Found</h1>
            <p className="text-sm text-zinc-600">
                The page you are looking for does not exist.
            </p>
            <Button className="mt-4" onClick={() => globalThis.history.back()}>
                Go Back
            </Button>
        </div>
    );
}