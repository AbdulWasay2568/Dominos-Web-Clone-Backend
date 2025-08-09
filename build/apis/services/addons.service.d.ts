import { CreateAddonDto } from '../interfaces/addons.interface.js';
export declare const createAddon: (data: CreateAddonDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
}>;
export declare const getAllAddons: () => Promise<({
    options: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        optionName: string;
        additionalPrice: number;
        addonId: number;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
})[]>;
export declare const getAddonById: (id: number) => Promise<({
    options: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        optionName: string;
        additionalPrice: number;
        addonId: number;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
}) | null>;
export declare const deleteAddon: (id: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
}>;
