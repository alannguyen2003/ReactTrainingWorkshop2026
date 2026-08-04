import { axios } from "../../../api/client";
import { ApiResponse } from "../../../shared/types/api-response.types";
import { Product } from "../../../shared/types/product.types";

export const shopApi = {
    async getProducts(): Promise<ApiResponse<Product[]>> {
        const data = await axios.get<ApiResponse<Product[]>>("/c/abbb-80dc-4582-8e14");
        return data;
    }
}