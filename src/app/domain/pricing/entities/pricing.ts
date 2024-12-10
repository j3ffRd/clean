export interface Pricing {
    status: string;
    elements: PricingElement[];
}

export interface PricingElement {
    name: string;
    value: number;
}