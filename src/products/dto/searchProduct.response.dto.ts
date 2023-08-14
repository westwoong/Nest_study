export class SearchProductResponseDto {
  userName: string;
  companyName: string;
  productName: string;
  price: number;
  description: string;

  constructor(responseProduct: {
    userName: string;
    companyName: string;
    productName: string;
    price: number;
    description: string;
  }) {
    this.userName = responseProduct.userName;
    this.companyName = responseProduct.companyName;
    this.productName = responseProduct.productName;
    this.price = responseProduct.price;
    this.description = responseProduct.description;
  }
}
