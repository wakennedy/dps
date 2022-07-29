import { Brand, Plastic } from "@prisma/client";



export interface BrandFormData {
    name: string;
}
export interface PlasticFormData {
    brandId: String | Brand | Number
    plasticName: string;
}
export interface DiscFormData {
    brandId: String | Brand | Number
    plasticId: String | Plastic | Number
    discName: string;
    speed: any;
    glide: any;
    turn: any;
    fade: any;
}
// export interface DiscFormData {
//     brand: Brand;
//     plastic: Plastic;
//     name: string;
//     speed: any;
//     glide: any;
//     turn: any;
//     fade: any;
// }
export interface FormData {
    brand: string;
    name: string;
    plastic: string;
    speed: any;
    glide: any;
    turn: any;
    fade: any;
}