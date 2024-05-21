export type DealDto = {
    id: string;
    productName: string;
    underlying: {name: string, currency: string};
    client: {name: string;}
}
