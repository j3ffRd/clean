import { Client } from "./client";
import { Underlying } from "./underlying";

export class Deal {
    id: string;
    productName: string;
    underlying: Underlying;
    client: Client;
}

