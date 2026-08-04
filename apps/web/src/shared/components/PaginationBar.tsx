import { Pagination, PaginationLink } from "@react-workshop/ui/pagination";
import { PaginationProps } from "../types/pagination.types";
export function PaginationBar({
    currentPage,
    lastPage
}: Readonly<PaginationProps>) {
    return (
        <Pagination className="pb-6">
            {currentPage > 1 && (
                <PaginationLink
                    isActive={false}
                    href="/demo">Previous</PaginationLink>
            )}
            {currentPage > 1 && (
                <PaginationLink
                    isActive={false}
                    href="/demo">{currentPage - 1}</PaginationLink>
            )}
            <PaginationLink
                isActive={true}
                href="/demo">{currentPage}</PaginationLink>
            {currentPage + 1 < lastPage && (
                <PaginationLink
                    isActive={false}
                    href="/demo">{currentPage + 1}</PaginationLink>
            )}
            {currentPage === 1 && lastPage !== currentPage && (
                <PaginationLink
                    isActive={false}
                    href="/demo">{currentPage + 2}</PaginationLink>
            )}
            {currentPage < lastPage && (
                <PaginationLink
                    isActive={false}
                    href="/demo">
                    Next
                </PaginationLink>
            )}
        </Pagination>
    );
}