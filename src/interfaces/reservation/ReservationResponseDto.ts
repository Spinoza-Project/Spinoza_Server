import mongoose from "mongoose";

export interface ReservationResponseDto {
    reservations: Data[];
    fruitTypes: FruitType[];
}

interface Data {
    _id: mongoose.Types.ObjectId;
    fruitType: FruitType;
    price: number;
    reserved: boolean;
}

interface FruitType {
    _id: mongoose.Types.ObjectId | string;
    name: string;
    information: string;
    image: string;
}
