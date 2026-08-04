import { useQuery } from "@tanstack/react-query";
import { shopApi } from "../api/shop.api";

export function useGetProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => shopApi.getProducts()
    })
}