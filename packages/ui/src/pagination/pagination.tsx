import { Button } from "../button/button";
import { cn } from "../utils";

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> & React.ComponentProps<"a">;

function Pagination({
    className,
    children,
}: React.ComponentProps<"div">) {
    return (
        <div 
            className={cn("mt-16 flex justify-center gap-9", className)} >
            {children}
        </div>      
    );
}

function PaginationLink({
    className,
    isActive,
    ...props
}: PaginationLinkProps) {
    return (
        <a
            className={cn("grid min-h-[60px] min-w-[60px] place-items-center rounded-[10px] px-5 text-xl font-normal", 
                        "hover:bg-[#b88e2f] hover:text-white",
                isActive ? "bg-[#b88e2f] text-white" : "bg-[#F9F1E7] text-black",
                className)}
            data-active={isActive}
            data-slot="pagination-link"
            {...props} />
    )
}

export {    
    Pagination, PaginationLink
};