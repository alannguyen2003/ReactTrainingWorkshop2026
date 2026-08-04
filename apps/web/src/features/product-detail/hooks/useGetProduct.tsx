import { useQuery } from "@tanstack/react-query";
import { productDetailApi } from "../api/product-detail.api";

export function useGetProduct(id: string) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => productDetailApi.getProduct(id)
    });
}