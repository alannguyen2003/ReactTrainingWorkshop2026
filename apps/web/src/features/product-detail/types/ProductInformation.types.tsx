export type ProductInformationSectionType = {
    key: string;
    label: string;
    active?: boolean;
    content: string[];
};

export type ProductInformationType = {
    tabs: ProductInformationSectionType[];
    detailImages?: string[];
};

export type ProductDetailInformationType = {
    id: string;
};