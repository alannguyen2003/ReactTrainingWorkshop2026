import { axios } from "../../../api/client";
import { ApiResponse } from "../../../shared/types/api-response.types";
import { Product } from "../../../shared/types/product.types";

export const shopApi = {
    async getProducts(): Promise<ApiResponse<Product[]>> {
        //https://dummyjson.com/c/d91b-ae81-4118-9dd5
        const data = await axios.get<ApiResponse<Product[]>>("/c/d91b-ae81-4118-9dd5");
        return data;
    }
}