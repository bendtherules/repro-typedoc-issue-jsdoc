export type sid = string;

export interface OrderConfigElement {
    sid: sid;
    shares: number,
}

export type OrderConfig = Array<OrderConfigElement>;

export interface SidPriceMap {
    [sid: string]: number;
}
