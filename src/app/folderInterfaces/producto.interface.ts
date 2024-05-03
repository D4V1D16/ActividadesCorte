import { Rating } from "../folderInterfaces/rating.interface";
export interface Celular {
    marca: string;
    modelo: string;
    precio: number;
    almacenamientoInterno: number;
    color:string;
    imagen:string;
    rating:Rating;
} 