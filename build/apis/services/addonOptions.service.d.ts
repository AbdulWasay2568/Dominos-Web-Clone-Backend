import { CreateAddonOptionDto, UpdateAddonOptionDto } from '../interfaces/addonOptions.interface.js';
export declare const createOption: (data: CreateAddonOptionDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    optionName: string;
    additionalPrice: number;
    addonId: number;
}>;
export declare const getAllOptions: () => Promise<({
    addon: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    optionName: string;
    additionalPrice: number;
    addonId: number;
})[]>;
export declare const getOptionById: (id: number) => Promise<({
    addon: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    optionName: string;
    additionalPrice: number;
    addonId: number;
}) | null>;
export declare const updateOption: (id: number, data: UpdateAddonOptionDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    optionName: string;
    additionalPrice: number;
    addonId: number;
}>;
export declare const deleteOption: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    optionName: string;
    additionalPrice: number;
    addonId: number;
}>;
