export class Product {
    constructor(
        public productId: number,
        public productName: string,
        public productPrice: number,
        public productImageUrl: string,
        public available: boolean,
        public productDescription: string) { }
}