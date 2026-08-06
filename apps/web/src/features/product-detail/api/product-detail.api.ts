import { axios } from "../../../api/client";
import { ProductDetail } from "../../../shared/types/product.types";

export const productDetailApi = {
    async getProduct(id: string): Promise<ProductDetail> {
        const data = await axios.get<ProductDetail>("/c/" + id);
        return data;
    }
}